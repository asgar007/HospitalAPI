const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
/* CONFIGURATIONS */
dotenv.config();
const PORT = process.env.PORT || 6001;
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());



/* ROUTE */
app.use('/', require('./routes'));

/* MONGO SETUP */
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function(){
    app.listen(PORT, function() { console.log(`successfull server started on port: ${PORT}`); });
}).catch(function(err){ console.log(`error in starting server: ${err}`); })
