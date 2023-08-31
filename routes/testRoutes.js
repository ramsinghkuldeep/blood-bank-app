const { testController } = require("../controllers/testController");

const express = require("express");

// router object 
const router = express.Router();

// routes 
router.get('/',testController);

// export
module.exports = router;