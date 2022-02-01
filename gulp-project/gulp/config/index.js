const fs = require("fs")
const path = './gulp/tasks'
const pathArray = fs.readdirSync(path).map(el => `${path}/${el}`)


module.exports = pathArray