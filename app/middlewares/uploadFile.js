const multer = require("multer");

const MAX_FILE_SIZE = Number(process.env.MAX_FILE_SIZE) || 2097152; //2 mb file
const ALLOWED_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

const storage = multer.memoryStorage();
// multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, UPLOAD_DIR);
//   },
//   filename: function (req, file, cb) {
//     const extname = path.extname(file.originalname);
//     cb(
//       null,
//       Date.now() + "-" + file.originalname.replace(extname, "") + extname
//     );
//   },
// });

const fileFilter = (req, file, cb) => {
  //   const extname = path.extname(file.originalname);
  //   if (!ALLOWED_FILE_TYPES.includes(extname.substring(1))) {
  //     return cb(new Error("File type not allowed"),false);
  //   }
  //   cb(null, true);

  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files are allowed"), false);
  }
  if (file.size > MAX_FILE_SIZE) {
    return cb(new Error("File size exceeds the maximum limit"), false);
  }
  if (!ALLOWED_FILE_TYPES.includes(file.mimetype)) {
    return cb(new Error("File type is not allowed"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter,
});

module.exports = upload;
