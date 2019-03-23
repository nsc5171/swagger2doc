const asciidoctorJs = require('asciidoctor.js')();
const { ASCIIDOCTOR } = require('../util/constants');

module.exports = () => {
    return (asciiString) => {
        return asciidoctorJs.convert(asciiString, ASCIIDOCTOR.OPTIONS);
    }
}