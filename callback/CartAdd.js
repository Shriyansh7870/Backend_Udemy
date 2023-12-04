const { Cart, LearningData } = require("../Model/AddCart");

exports.addToCart = async (req, res) => {
  console.log("req.body", req.body);
  const cart = new Cart({ ...req.body });
  try {
    const doc = await cart.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAddToCart = async (req, res) => {
  try {
    const other = await Cart.find({});
    res.send(other);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getdeleteCart = async (req, res) => {
  const data = req.body;
  const remove = await Cart.findOneAndDelete({ id: data.id });
  console.log("item removed", remove);
  res.send("item data removed");
};

exports.datapushtoLearning = async (req, res) => {
  const data = req.body;
  const learning = await LearningData.create(data);
  res.send(learning);
};
exports.getLearningdata = async (req, res) => {
  const data = await LearningData.find({});
  res.send(data);
};
exports.deleteCard = async (req, res) => {
  const data = await Cart.deleteMany({});
  res.send(data);
};
