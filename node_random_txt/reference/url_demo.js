/** @format */

const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//serialized URL
console.log(myUrl.href)

//Host
console.log(myUrl.host)

// Params object
console.log(myUrl.searchParams)

myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
