const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')

let appInfoTmpl = fs.readFileSync(path.join(__dirname, '../util/handlebarsTemplates/app-info.handlebars'), "utf8");

let helpers = {
    ref: (str) => {
        return refHelper(str);
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
    },
    toUpperCase: function (str) {
        return str && typeof str === 'string' && str.toUpperCase() || "";
    },
    LowerCase: function (str) {
        return str && typeof str === 'string' && str.LowerCase() || "";
    },
    anchor: function (str) {
        return str && typeof str === 'string' && str.replace(/[\.\{\}]/g, "") || "";
    },
    respSchema: function (schema) {
        let result = "";
        if (typeof schema === 'object') {
            let anchor = refHelper(schema.$ref || schema.items && schema.items.$ref || "");
            let type = schema.type || schema.items && schema.items.type || "";
            result = anchor && `<<_${anchor},${anchor}>> ${type}` || `${type}`;
        }
        return result;
    }
}
function refHelper(str) {
    return str && typeof str === 'string' && str.substring(14) || "";
}
Handlebars.registerHelper(helpers);

module.exports = () => {
    return (context) => {
        let templ = Handlebars.compile(appInfoTmpl);
        return templ(context);
    }
}