const UserDataModel = require("../models/users"); 

class UploadUsersDataServices {
    async uploadData(data) {
        try {
         await UserDataModel.insertMany(data);
         return "ok"
        } catch (error) {
              throw error;
        }
    };

}

exports.UploadUsersDataServicesInstance = new UploadUsersDataServices();