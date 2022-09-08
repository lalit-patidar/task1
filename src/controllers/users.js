const path = require("path")
const convertDataToJson = require("../utils/convert-csv-to-json")
const {UploadUsersDataServicesInstance} = require("../services/users")
const fs = require("fs")

const usersGetController = async (req, res) => {
    try {
        const getDataFrom = req.query.from;
        const users = await UploadUsersDataServicesInstance.getUsersInBatches(getDataFrom);
        res.json(users)
     } catch (error) {
        res.send({
            sataus: 400,
            message: "bad request"
        })
     }
}


const usersPostController = async (req, res) => {
    try {
        let filePath = path.join(__dirname, "../incomingCsvs")
        filePath = `${filePath}/${req.file.originalname}`
        console.log("file", req.file)
         fs.writeFile(filePath, req.file.buffer, "binary", async (err) => {
            if (err) console.log(err);
            else {
                console.log("Data saved");
                const userData = await convertDataToJson(filePath)
                const serviceResponse = await UploadUsersDataServicesInstance.uploadData(userData);
                console.log(serviceResponse, "thi sis response")
                res.send(serviceResponse);
            }
          });
     } catch (error) {
        console.log(error, "error from post method")
        res.send({
            sataus: 400,
            message: "bad request"
        })
     }
}

const userDeleteController = async (req, res) => {
    try {
        const deleteFrom = req.params.email;
        console.log(deleteFrom, req.params)
        const responseFromService = await UploadUsersDataServicesInstance.deleteUser(deleteFrom);
        res.json(responseFromService)
     } catch (error) {
        res.send({
            sataus: 400,
            message: "bad request"
        })
     }
}

module.exports = {
    usersGetController,
    usersPostController,
    userDeleteController
}