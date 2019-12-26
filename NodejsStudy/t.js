//引用模块
var mysql      = require('mysql');
//创建连接
var connection = mysql.createConnection({
    //主机地址 （默认：localhost）
  host     : 'localhost',
  //用户名
  user     : 'root',
  //密码
  password : '123456',
  //在mysql中创建的数据库名
  database : 'tests'
});
 //连接到数据库
connection.connect();


 //查询一张表
//sql语句,gym_card是数据库gym中存在的表
var  sql = 'SELECT * FROM websites';
//查询的函数,采用的异步请求方式
connection.query(sql,function (err, result) {
        //err是查询出错的情况
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        //result是返回的结果集
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');       
});
 //关闭数据库连接
connection.end(); 