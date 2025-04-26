const { getUsers } = require("../controller/users_controller");

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", getUsers);

module.exports = router;
