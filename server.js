const mysql = require('mysql');
const express = require('express');
const app = express();


// Select single post
app.get('/add', (req, res) => {
    res.send('Post fetched...');
    
});



var p = process.env.PORT || 5000;
app.listen(p,()=>console.log(`loading......${process.env.PORT}`));


/*app.get('/',(req ,res )=>{
    let sql;
    //sql ='CREATE DATABASE scsDB';
    //sql='Create table userInfo (id int,userName varchar(50), password varchar(50),exprieDate varchar(10), speed varchar(5),cost varchar(10),totalQuota varchar(5),currentQuota varchar(5),balance varchar(50) )';
    sql =''
    db.query(sql,(err , result)=>{
        if(err) throw err;
        console.log(result);
        res.send("database created......");

    });
});*/
