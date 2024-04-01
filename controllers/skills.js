const Skill = require("../models/skills");

module.exports = {
    index,
    show,
    newSkill,
    create,
}

function index(req, res) {
    res.render("skills/index", {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id),
        title: "Skill Details"
    });
}

function newSkill(req, res) {
    res.render("skills/new", {
        title: "New skill"
    });
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect("/skills");
}