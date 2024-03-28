const skills = [
    {id: 1, skill: "JavaScript", type: "technical skill", proficiency: "intermediate"},
    {id: 2, skill: "C++", type: "technical skill", proficiency: "beginner"},
    {id: 3, skill: "Communication", type: "soft skill", proficiency: "advanced"},
    {id: 4, skill: "Teamwork", type: "soft skill", proficiency: "intermediate"}
]

module.exports = {
    getAll,
    getOne,
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}