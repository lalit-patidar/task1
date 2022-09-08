const UserDataModel = require("../models/users"); 

class UploadUsersDataServices {
    async uploadData(data) {
        try {
            console.log("last user", data)
          const users = await UserDataModel.find();
        let filteredUserArray = data.filter((d)=>{
            let condition = users.some(user =>   user.Email == d.Email || user.PhoneNumber == d.PhoneNumber);
            console.log(condition)
            if(!condition)
                return d;
        }) 

      await UserDataModel.insertMany(filteredUserArray);
         return {
            status: 200,
            message: "users added successfully",
            totalUserAdded: filteredUserArray.length,
            removedDuplicateUsers: data.length - filteredUserArray.length
         }
        } catch (error) {
            console.log("error he bhai ya", error)
              throw error;
        }
    };

    async getUsersInBatches(skip) {
        try {
           const users = await UserDataModel.find().skip(skip).limit(10)
           if(!users) throw new Error("not fount");
           return {
            status: 200,
            message: "Success to get user",
            users
        };
        } catch(error) {
          throw error;
        }
   }

    async deleteUser(from) {
         try {
            const user = await UserDataModel.findOneAndDelete({Email: from})
            if(!user) throw new Error("user not found");
            return {
                status: 200,
                message: "Deleted Successfully",
                deletedUser: user.Email
            }
         } catch(error) {
           throw error;
         }
    }

}

exports.UploadUsersDataServicesInstance = new UploadUsersDataServices();