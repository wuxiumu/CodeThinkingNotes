# -*- coding: utf-8 -*-
import mysql.connector
 
mydb = mysql.connector.connect(
  host="localhost",       # 数据库主机地址
  user="root",    # 数据库用户名
  passwd="123456",   # 数据库密码  
  database="demo"
)
 
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM websites")
 
myresult = mycursor.fetchall()     # fetchall() 获取所有记录
 
for x in myresult:
  print(x)