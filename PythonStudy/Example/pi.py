# 定义一个方法来计算圆的面积
def findArea(r):
    PI = 3.142
    return PI * (r*r)
 
# 调用方法
num = float(input('请输入一个数字： '))
print("圆的面积为 %.6f" % findArea(num))