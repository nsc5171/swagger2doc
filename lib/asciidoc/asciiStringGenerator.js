const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')

let appInfoTmpl = fs.readFileSync(path.join(__dirname, '../util/handlebarsTemplates/app-info.handlebars'), "utf8");

let helpers = {
    ref: (str) => {
        return str && str.substring(14);
    },
    objLength: (obj) => {
        return typeof obj === 'object' ? Object.keys(obj).length : 0;
    },
    IF: function (v1, operator, v2, options) {

        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '!=':
                return (v1 != v2) ? options.fn(this) : options.inverse(this);
            case '!==':
                return (v1 !== v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    }
}
Handlebars.registerHelper(helpers);

module.exports = () => {
    return (context) => {
        let templ = Handlebars.compile(appInfoTmpl);
        return templ(context);
    }
}