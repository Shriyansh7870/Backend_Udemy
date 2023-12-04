const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./config/db");
const allcomponet = require("./Route/Route");
const router = require("./Route/AddCartRoute");
const port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const stripe = require("stripe")(
  "sk_test_51OFIomSI0xtOp9M48W366HBE5QDo7oR2HKZyLVW2Dg9YNvJ95E2aIVJbHen4bLdsrwsraF190ouIGyLXRta4GpFs00GW4XRqmb"
);

app.post("/out/create-checkout-session", async (req, res) => {
  const { Cartitem } = req.body;
  console.log(Cartitem);
  const lineItems = Cartitem.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity || 1,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:4000/",
    cancel_url: "http://localhost:4000/",
  });
  res.json({ id: session.id });
});

app.use("/api", allcomponet);
app.use("/api", router);
app.listen(port, async () => {
  try {
    await connection();
    console.log("Server started after connection");
  } catch (err) {
    console.log(err, "error ocuured");
  }
  console.log(`Server is running on http://localhost:${port}`);
});
