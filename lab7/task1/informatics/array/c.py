N = int(input())

array = list(map(int, input().split()))

cnt = 0
for num in array:
    if num > 0:
        cnt += 1

print(cnt)
