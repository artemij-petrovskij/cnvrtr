const express = require('express')
const app = express()


const Handlebars = require('handlebars')
const exphbs = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
var hbs = exphbs.create({ 
    defayltLayout:'main',
    extname:'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
 });

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('public'));


const mainRoute = require('./router/main_route')



app.use('/', mainRoute)


const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});