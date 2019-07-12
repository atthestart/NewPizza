//step1:include all modules
const express = require('express');
const cors =  require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const dbconfig = require('./DB');
const apiPizzaRoute = require('./server/api-pizza.route');
const app = express();
const path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.DB,{ useNewUrlParser : true}).then(
    ()=>console.log("DATABASE CONNECTED"),
    (err)=> console.log(" db connectn failed")
);

app.use(bodyparser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,resp)=>{

   resp.sendFile("index.html");
});

app.use('/pizza',apiPizzaRoute);

app.listen(4000,()=>{console.log("server listening at 4000")});