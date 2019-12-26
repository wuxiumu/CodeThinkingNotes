# Filename : test.py
# author by : www.runoob.com
 
# 用户输入数字
 
# num = float(input("输入一个数字: "))
# if num > 0:
#    print("正数")
# elif num == 0:
#    print("零")
# else:
#    print("负数")

# -*- coding: UTF-8 -*-
 
# Filename : test.py
# author by : www.runoob.com
 
def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        pass
 
    try:
        import unicodedata
        unicodedata.numeric(s)
        return True
    except (TypeError, ValueError):
        pass
 
    return False
 
# 测试字符串和数字
print(is_number('foo'))   # False
print(is_number('1'))     # True
print(is_number('1.3'))   # True
print(is_number('-1.37')) # True
print(is_number('1e3'))   # True
 
# 测试 Unicode
# 阿拉伯语 5
print(is_number('٥'))  # True
# 泰语 2
print(is_number('๒'))  # True
# 中文数字
print(is_number('四')) # True
# 版权号
print(is_number('©'))  # False

# num = int(input("输入一个数字: "))
# if (num % 2) == 0:
#    print("{0} 是偶数".format(num))
# else:
#    print("{0} 是奇数".format(num))