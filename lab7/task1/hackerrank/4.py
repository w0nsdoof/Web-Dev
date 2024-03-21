import re

if __name__ == '__main__':
    n = int(input())
    for _ in range(n):
        regex = input()
        try:
            re.compile(regex)
            print("True")
        except re.error:
            print("False")

# https://www.hackerrank.com/challenges/incorrect-regex/problem?isFullScreen=true