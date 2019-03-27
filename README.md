# Node Stats (CLI)

Curious how much disk space your node_modules occupy? Node-stats to the rescue!

## Objectives

- create a cli app that reads all sub-folders recursively until it finds a node_modules folder and collects it's size.
- your app should be tested (TDD if you want)
- cli should have a usage description (--help)
- you should use your calculator module
  - remember you can install node modules by there git-url as well
  - you can install a github dependency like this `npm i git://github.com/user/project.git`

**Example Output:**

```
$ node-stats .

You have 5 projects with node_modules with a total size of 5GB
```

## Extra Objectives

- `--remove` flag (Test this with caution) to remove all node_modules folder
- `--ls` lists all project folder names and node_module sizes
