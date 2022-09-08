const mongoose = require("mongoose");

const usersDataSchema = new mongoose.Schema({
    ID: String,
    Name: String,
    UserName: {
        type: String,
        trim: true,
        uinque: true
    },
    Email: {
        type: String,
        trim: true,
        uinque: true
    },
    UserPhoto: {
      type: String
    },
    PhoneNumber: {
        type: String,
        uinque: true
    },
    Designation: String,
    ShortDescription: String

})

const UserData = mongoose.model("user-data", usersDataSchema);

module.exports = UserData;