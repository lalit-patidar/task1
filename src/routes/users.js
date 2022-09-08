const express = require("express");
const { usersGetController, usersPostController, userDeleteController } = require("../controllers/users")
const multer = require("multer");
const os = require("os")

const Routes = express.Router();

const upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(csv)$/)) {
            return cb(new Error('Please upload an csv file'))
        }

        cb(undefined, true)
    }
})

Routes.get("/users", usersGetController);
Routes.post("/users", upload.single("file"), usersPostController);
Routes.delete("/users/:email", userDeleteController);



module.exports = Routes;