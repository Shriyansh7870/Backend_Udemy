const mongoose = require("mongoose");
const { Schema } = mongoose;
const cartSchema = new Schema({
  id: String,
  name: String,
  type: String,
  text: String,
  image: String,
  price: String,
  teacher: String,
  instructor: String,
  rating: String,
  Rating: String,
  views: String,
  duration: String,
  description: String,
});

const learningSchema = new Schema({
  id: String,
  name: String,
  type: String,
  text: String,
  image: String,
  price: String,
  teacher: String,
  instructor: String,
  rating: String,
  Rating: String,
  views: String,
  duration: String,
  description: String,
});
const LearningData = mongoose.model("LearningData", learningSchema);
const Cart = mongoose.model("Cart", cartSchema);

module.exports = { LearningData, Cart };
