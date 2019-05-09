let mongoose = require("mongoose");
let TestSchema = new mongoose.Schema({
    name: String,
    code: String,
    phone: String,
    loginName: String,
    password: String,
});
module.exports = mongoose.model("users", TestSchema);