const path = require("path");
const { v4: uuidv4 } = require("uuid");

const uploadFile = (
  files,
  validExtensions = ["png", "jpg", "jpeg", "gif"],
  folder = ""
) => {
  return new Promise((resolve, reject) => {
    const { file } = files;
    const cuttedName = file.name.split(".");
    const extension = cuttedName[cuttedName.length - 1];

    // Validar la extension
    if (!validExtensions.includes(extension)) {
      return reject(
        `La extensión ${extension} no es permitida. [${validExtensions}]`
      );
    }

    const temporaryName = uuidv4() + "." + extension;
    const uploadPath = path.join(
      __dirname,
      "../uploads/",
      folder,
      temporaryName
    );

    file.mv(uploadPath, (err) => {
      if (err) {
        reject(err);
      }

      resolve(temporaryName);
    });
  });
};

module.exports = {
  uploadFile,
};
