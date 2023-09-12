const { log } = require('console');
const fs= require('fs');

let data= ''

let readablestream= fs.createReadStream(__dirname+ '/input.txt')

readablestream.on('data', (chunk)=>{
    console.log(chunk.toString());
})