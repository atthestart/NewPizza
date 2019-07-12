const express = require('express');
const app = express();
const apiPizzaRouter = express.Router();
let Pizza =  require('./pizza');
apiPizzaRouter.route('/pizza-add').post((req,resp)=>{
    let body_pizza=new Pizza(req.body);
    body_pizza.save().then(
        ()=> resp.send("new pizza added"),
        (err)=>resp.send("failure while adding pizza")
    );
});


apiPizzaRouter.route('/pizza-list').get((req,resp)=>{
    Pizza.find((err,data)=>{
        if(err){
            resp.send("failure");
        }
        resp.send(data);
    });
 });
 apiPizzaRouter.route('/admin/pizza-list/addPizza').post((req,resp)=>{
    let body_Pizza=new Pizza(req.body);
    body_Pizza.save().then(
        ()=> resp.send("new pizza added"),
        (err)=>resp.send("failure while adding pizza")
    );

});


 apiPizzaRouter.route('/admin/pizza-list').get((req,resp)=>{
    Pizza.find((err,data)=>{
        if(err){
            resp.send("failure");
        }
        resp.send(data);
    });
 });

 apiPizzaRouter.route('/admin/pizza-list/update/:pid/:price').put((req,resp)=>{
    
    let p_pid=req.params.pid;
    let p_price=req.params.price;
    Pizza.findOneAndUpdate({pid:p_pid},{price:p_price},(err,data)=>{
            if(err) resp.send("fail to update");
            resp.send("updated record for "+p_pid+" as "+p_price);
    });
});
module.exports=apiPizzaRouter;