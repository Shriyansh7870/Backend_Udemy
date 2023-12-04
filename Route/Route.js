const {
  EnterData,
  datafind,
  EnterData1,
  datafind2,
  imagedata,
  imagefind,
} = require("../callback/callback");
const { register, login } = require("../function/function");
const allcomponet = require("express").Router();

/**************************************Data Push************************/

allcomponet.post("/enterdata", EnterData);

allcomponet.get("/datafind", datafind);

allcomponet.post("/enterdata1", EnterData1);
allcomponet.get("/datafind1", datafind2);

allcomponet.post("/imagedata", imagedata);
allcomponet.get("/imagefind", imagefind);
allcomponet.post("/register", register);
allcomponet.post("/login", login);

module.exports = allcomponet;
