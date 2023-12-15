const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const renamedFiles = [];
  const fileCount = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    let newName = name;

    if (fileCount[name] !== undefined) {
      const count = fileCount[name];
      newName = `${name}(${count})`;
      fileCount[name]++;
    } else {
      fileCount[name] = 1;
    }

    renamedFiles.push(newName);
    fileCount[newName] = 1;
  }

  return renamedFiles;
}

module.exports = {
  renameFiles
};
