var express = require('express');
var router = express.Router();
var skillsController = require("../controllers/skills");

// All actual paths start with "/skills"
router.get("/", skillsController.index);
router.get("/new", skillsController.newSkill);
router.get("/:id", skillsController.show);

router.post("/", skillsController.create);

router.delete("/:id", skillsController.deleteSkill);

module.exports = router;
