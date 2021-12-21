

const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/groups'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'group-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

// Hago pública a UPLOAD. para verla desde Routes
module.exports = upload;
