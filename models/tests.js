let mongoose = require("mongoose");
let TestSchema = new mongoose.Schema({
    name: String,
});
module.exports = mongoose.model("tests", TestSchema);