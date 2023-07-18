const fieldsValidation = require("./fieldsValidation");
const fileValidations = require("./fileValidations");
const JWTValidation = require("./JWTValidation");
const roleValidations = require("./roleValidations");

module.exports = {
  ...fieldsValidation,
  ...fileValidations,
  ...JWTValidation,
  ...roleValidations,
};
