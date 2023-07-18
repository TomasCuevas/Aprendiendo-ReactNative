const dbValidations = require("./dbValidations");
const generarJWT = require("./JWTGenerate");
const googleVerify = require("./googleVerify");
const uploadFile = require("./uploadFile");

module.exports = {
  ...dbValidations,
  ...generarJWT,
  ...googleVerify,
  ...uploadFile,
};
