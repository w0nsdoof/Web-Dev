N = int(input())

array = list(map(int, input().split()))

for i in range(N // 2):
    array[i], array[N - i - 1] = array[N - i - 1], array[i]

for num in array:
    print(num, end=" ")
