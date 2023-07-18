const { Router } = require("express");

//* CONTROLLER *//
const { search } = require("../controllers/seach");

//* ROUTES {{url}}/api/search *//
const router = Router();

router.get("/:collection/:term", search);

module.exports = router;
