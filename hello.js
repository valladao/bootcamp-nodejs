const path = require("path")
//const fs = require("fs")
const fs = require("fs-extra")

const basePath = path.resolve("manoel")

//const newPath = path.resolve("manoel")

fs.remove(basePath, (err) => {
  if (err) {
    console.error(err)
  }
})
