// const { UsersServicesInstance } = require("../../services/admin/admin-credentials-services");
// const HttpResponse = require("../../utils/httpResponse/all-http-response");
// const traceAndThrowError = require("../../utils/errorHandling/custom-error");
const convertDataToJson = require("../utils/convert-csv-to-json")
const {UploadUsersDataServicesInstance} = require("../services/users")
const fs = require("fs")

const usersGetController = async (req, res) => {
    try {
        console.log("file,,,", req.file)
        const userData = convertDataToJson(req.file)
        const admin = await UploadUsersDataServicesInstance.uploadData(userData);
        // const responseBody = HttpResponse.created(admin);
        // res.send(responseBody);
     } catch (error) {
        // const mappedError = traceAndThrowError(error);
        // next(mappedError);
     }
}

const path = require("path")
let filePath = path.join(__dirname, "../incomingCsvs")

const usersPostController = async (req, res) => {
    try {
        // console.log("file,,,", req.file)
        filePath = `${filePath}/${req.file.originalname}`
         fs.writeFile(filePath, req.file.buffer, "binary", async (err) => {
            if (err) console.log(err);
            else {
                console.log("Data saved");
                const userData = await convertDataToJson(filePath)
                console.log(userData, 'this is user.dat')

            }
          });
        console.log("file,,,", "hhghghg")
        // const serviceResponse = await UsersServicesInstance.createAdmin(userData);
        // const responseBody = HttpResponse.created(serviceResponse);
        // res.send(responseBody);
        res.send("ok")
     } catch (error) {
        // const mappedError = traceAndThrowError(error);
        // next(mappedError);
        console.log(error, "error from post method")
        res.send("oops")
     }
}

module.exports = {
    usersGetController,
    usersPostController
}