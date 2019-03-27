const path = require("path")
const { findNodeModulesFolder } = require("./findNodeModuleFolders")

/**
 * To make this work on your machine I can not just use a absolut
 * "hard coded" path. Instead I use the path module, to construct
 * a path, in combination with the variable __dirname which is exposed
 * in a module. __dirname represents the path of the directory where
 * the current file (module) lives in.
 */

const testDir = path.join(__dirname, "..", "testDirectory")
//                           ↟ lib    ↟ dir up    ↟ test directory name

const successDirs = [
  testDir + "/folders" + "/node_modules",
  testDir + "/other" + "/node_modules"
]

describe("Find Node Modules", () => {
  test("should find node_module folder in test directory", () => {
    expect(findNodeModulesFolder(testDir)).toEqual(successDirs)
  })

  test("should throw on file or non existing path as input", () => {
    expect(() => findNodeModulesFolder(testDir + ".html").toThrow())
    expect(() =>
      findNodeModulesFolder(
        testDir + "/someFolderThatShouldNeverExist"
      ).toThrow()
    )
  })
})
