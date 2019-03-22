const asciiStringGenerator = require('./lib/asciidoc/asciiStringGenerator')();
const swagger = require('./swagger.json')
const constants = require('./lib/util/constants')
const asciiToDocConverter = require('./lib/asciidoc/asciiToDocConverter')();
const generateDocFile = require('./lib/util/output/generateDocFile')();

let context = Object.assign({}, swagger, constants.ASCIIDOCTOR);
let asciiString = asciiStringGenerator(context);
console.log(asciiString);
generateDocFile(asciiString, "doc.adoc")
let html = asciiToDocConverter(asciiString);
// console.log(html);
generateDocFile(html, "document.html")
