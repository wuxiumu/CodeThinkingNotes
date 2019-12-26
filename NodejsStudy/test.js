const mysql = require('mysql');

var db = mysql.createConnection({host:'127.0.0.1',user:'root',password:'123456',database:'javastudy'});


db.query('SELECT * FROM `websites`;',(err,data)=>{
if(err){
console.log('err',err);
}else{
console.log('success',data);
}
})