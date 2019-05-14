let mongoose = require("mongoose");
let UsersSchema = new mongoose.Schema({
    name: String,
});
module.exports = mongoose.model("tests", UsersSchema);