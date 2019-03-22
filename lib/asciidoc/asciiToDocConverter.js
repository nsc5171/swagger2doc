const asciidoctorJs = require('asciidoctor.js')();
module.exports = () => {
    return (asciiString) => {
        return asciidoctorJs.convert(asciiString, { "backend": "html5", "doctype": "article", "safe": "unsafe", "header_footer": true, "verbose": 1, "timings": false, "trace": false, "mkdirs": true, "attributes": [] });
    }
}