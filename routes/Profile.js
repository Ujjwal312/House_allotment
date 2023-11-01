const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")
const {

  updateProfile,
  getAllUserDetail,
  updateDisplayPicture,

} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account

router.put("/updateProfile", auth, updateProfile)

router.get("/getAllUserDetail",auth,getAllUserDetail);
router.put("/updateDisplayPicture", updateDisplayPicture)

module.exports = router;