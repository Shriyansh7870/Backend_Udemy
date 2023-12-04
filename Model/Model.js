const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
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
const userRegister = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
});

const teacher = new mongoose.Schema({
  id: String,
  type: String,
  name: String,
  teacher: String,
  subject: String,
  Rating: String,
  number: String,
});

const imageforAll = new mongoose.Schema({
  id: String,
  image: String,
});
const Product = mongoose.model("data", userSchema);
const Register = mongoose.model("data2", userRegister);
const teacherDetails = mongoose.model("data3", teacher);
const image = mongoose.model("data4", imageforAll);
module.exports = {
  Product,
  Register,
  teacherDetails,
  image,
};
