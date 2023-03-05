const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + " - " + req.user.id.toString());
    }
})

const upload = multer({ storage });

module.exports = upload;
