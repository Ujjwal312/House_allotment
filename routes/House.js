const express = require("express")
const router = express.Router()
const { auth, isEmployee } = require("../middlewares/auth")
const {
    addhouse,
    getAllHouse,
    savechoices,
    getsevedhouse,
    lockhouses,
  } = require("../controllers/House");

  router.post("/addhouse",addhouse);
  router.get("/getallhouse",getAllHouse);
  router.post("/savechoices",auth,isEmployee,savechoices);
  router.get("/getsevedhouse",auth,isEmployee,getsevedhouse);
  router.post("/lockhouses",auth,isEmployee,lockhouses);

  


  module.exports = router;