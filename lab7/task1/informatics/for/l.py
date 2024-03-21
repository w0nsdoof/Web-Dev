binary = input()
res = 0

for i in range(len(binary)):
    res += int(binary[-(i+1)]) * (2 ** i)

print(res)
