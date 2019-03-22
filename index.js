const asciiStringGenerator = require('./lib/asciidoc/asciiStringGenerator')
const swagger = require('./swagger.json')
const constants = require('./lib/util/constants')


let stringGen = asciiStringGenerator();
let context = Object.assign({}, swagger, constants);
console.log(stringGen(context));

