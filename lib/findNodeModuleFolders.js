const fs = require("fs")
const path = require("path")

const findNodeModulesFolder = inputPath => {
  if (isFileOrDoesNotExist(inputPath))
    throw Error("Provided path is not a folder 🤷🏽‍♂️")

  let moduleFolderPaths = []
  const subFolders = fs
    .readdirSync(inputPath)
    .map(fileOrFolder => path.join(inputPath, fileOrFolder))
    .filter(fileOrFolder => isDirectory(fileOrFolder))
    .filter(folder => isNotHidden(folder))

  if (containsNodeModulesFolder(subFolders)) {
    moduleFolderPaths.push(inputPath + "/node_modules")
  } else {
    const modulesFoundInSubfolders = subFolders.map(path =>
      findNodeModulesFolder(path)
    )
    moduleFolderPaths = moduleFolderPaths.concat(...modulesFoundInSubfolders)
  }
  return moduleFolderPaths
}

const isDirectory = path => {
  try {
    return fs.statSync(path).isDirectory()
  } catch (e) {
    return false
  }
}

const isFileOrDoesNotExist = path => {
  try {
    return fs.statSync(path).isFile()
  } catch (e) {
    // if it does not exist stat panics and we catch it
    // and return true to satisfy our use case
    return true
  }
}

const containsNodeModulesFolder = folderArr => {
  return folderArr
    .map(folderPath => path.basename(folderPath) === "node_modules")
    .includes(true)
}

const isNotHidden = folder => {
  const folderName = path.basename(folder)
  return folderName[0] === "." ? false : true
}

module.exports = {
  findNodeModulesFolder
}
