const express = require("express");
const {
  addToCart,
  getAddToCart,
  getdeleteCart,
  datapushtoLearning,
  getLearningdata,
  deleteCard,
} = require("../callback/CartAdd");
const router = express.Router();

router
  .post("/addToCart", addToCart)
  .get("/getaddCart", getAddToCart)
  .post("/getdataRemove", getdeleteCart)
  .post("/datapush", datapushtoLearning)
  .get("/getLearning", getLearningdata)
  .delete("/deleteCard", deleteCard);

module.exports = router;
