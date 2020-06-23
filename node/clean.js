const fs = require('fs');

const deleteFolderRecursive = (path) => {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(path);
  }
};

console.log("Removing dist folder...");
deleteFolderRecursive("./dist");
console.log("Successfully removed dist folder");