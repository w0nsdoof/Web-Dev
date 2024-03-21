if __name__ == '__main__':
    for _ in range(int(input())):
        try:
            a, b = map(int, input().split())
            print(a // b)
        except ZeroDivisionError as e:
            print("Error Code:", e)
        except ValueError as e:
            print("Error Code:", e)

# https://www.hackerrank.com/challenges/exceptions/problem?isFullScreen=true