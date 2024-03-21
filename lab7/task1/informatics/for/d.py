x = input()
d = int(input())

cnt = 0

for c in x:
    if(int(c) == d):
        cnt+=1

print(cnt)