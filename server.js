var express = require('express');
var multer = require('multer');
var cors = require('cors');
var bodyParser = require('body-parser')
var routing = require('./router');

var app = express();
var models = require('./models');

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/example', routing);

models.sequelize.sync({ force: true }).then(function () {
    console.log('connected to db')
});



app.listen(3200, () => {
    console.log('am listening up on port 3200')
})