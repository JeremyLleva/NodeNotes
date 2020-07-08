/** @format */

//Core module path for directories
const path = require('path')

//Base Name
console.log(path.basename(__filename))

//Directory name
console.log(path.dirname(__filename))

//File extension
console.log(path.extname(__filename))

//Object file
console.log(path.parse(__filename).base)

// Concantenate paths
// Helps with os delimitter changes
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))
