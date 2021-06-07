const path = require("path")

//const name = "flavio"

const a = path.resolve("flavio.txt")
const b = path.resolve("tmp", "flavio.txt")
const c = path.resolve("/etc", "flavio.txt")

console.log(a)
console.log(b)
console.log(c)
