var express = require('express');
var router = express.Router();
var skillsController = require("../controllers/skills");

// All actual paths start with "/skills"
router.get("/", skillsController.index);
router.get("/:id", skillsController.show);

module.exports = router;
