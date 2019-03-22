const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')

let appInfoTmpl = fs.readFileSync(path.join(__dirname, '../util/handlebarsTemplates/app-info.handlebars'), "utf8");

Handlebars.registerHelper("ref",(str)=>{
    return str && str.substring(14);
});

module.exports = () => {
    return (context) => {
        let templ = Handlebars.compile(appInfoTmpl);
        return templ(context);
    }
}