const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv/config');
const PORT = process.env.PORT || 8080;
const userRouter = require('./routes/users');
const adminRouter = require('./routes/admins')


// connect to database

mongoose.connect(process.env.MONGO_URL, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Datatbase Connected')
);

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/admins', adminRouter);

// app.get('/', (req, res) => {
//     res.send({message : 'hello'})
// })


//  set port, listen for requests
app.listen(PORT, err => {
    if (err) {
        return console.log("Error", err);
    }
    console.log(`listening on port ${PORT}`);
});

module.exports = app;
