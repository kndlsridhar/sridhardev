const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    desc: String,
    img: String,
    category: String,
    type: String,
    url: String,
})

const ProjectModel = mongoose.model('projects',ProjectSchema)
module.exports = ProjectModel;