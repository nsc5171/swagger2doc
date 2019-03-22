const fs = require('fs')
const path = require('path')
const { OUTPUT_DIR: OUTPUT_FILEPATH } = require('../constants')

module.exports = () => {
    return (content, fileName) => {
        fs.writeFileSync(path.join(__dirname, OUTPUT_FILEPATH, fileName), content);
    }
}