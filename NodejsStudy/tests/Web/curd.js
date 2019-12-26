var mysql = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({
    host: 'localhost',             //主机
    user: 'root',                  //MySQL认证用户名
    password: '123456',            //MySQL认证用户密码
    port: '3306', 
    database: 'tests'
});
//创建一个connection
connection.connect(function (err) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect]  succeed!');
});
//执行SQL语句
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('The solution is: ', rows[0].solution);
});

// 增

var userAddSql = 'INSERT INTO dictionary(Number,Text) VALUES(?,?)';
var userAddSql_Params = ['0001', '一'];
//增
connection.query(userAddSql, userAddSql_Params, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');
});


var userModSql = 'UPDATE dictionary SET Text = ? WHERE Number = ?';
var userModSql_Params = ['二', '0001'];
//改
connection.query(userModSql, userModSql_Params, function (err, result) {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

var userGetSql = 'SELECT * FROM dictionary';
//查
connection.query(userGetSql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('-----------------------------------------------------------------\n\n');
});

var userDelSql = 'DELETE FROM dictionary';
//删
connection.query(userDelSql, function (err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

//关闭connection
connection.end(function (err) {
    if (err) {
        return;
    }
    console.log('[connection end] succeed!');
});