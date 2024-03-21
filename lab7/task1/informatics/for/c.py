import math

a = int(input())
b = int(input())

for i in range(a,b+1):
    temp = math.sqrt(i)

    if(temp**2 == i): print(i)