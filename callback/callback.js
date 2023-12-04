const { AllData, Teacher, imagefor } = require("../Component/Dummy");
const { Product, teacherDetails, image } = require("../Model/Model");

const imagedata = async (req, res) => {
  try {
    const response = await image.create(imagefor);
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const imagefind = async (req, res) => {
  try {
    const other = await image.find({});
    res.send(other);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const EnterData = async (req, res) => {
  try {
    const response = await Product.create(AllData);
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const datafind = async (req, res) => {
  try {
    const other = await Product.find({});
    res.send(other);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const EnterData1 = async (req, res) => {
  try {
    const response = await teacherDetails.create(Teacher);
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const datafind2 = async (req, res) => {
  try {
    const other = await teacherDetails.find({});
    res.send(other);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  EnterData,
  datafind,
  EnterData1,
  datafind2,
  imagedata,
  imagefind,
};
