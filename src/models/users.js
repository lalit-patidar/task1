const mongoose = require("mongoose");

const usersDataSchema = new mongoose.Schema({
    id: String,
    name: String,
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    designation: String,
    shortDescription: String

})

const UserData = mongoose.model("user-data", usersDataSchema);

module.exports = UserData;