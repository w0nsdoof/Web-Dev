from itertools import permutations

if __name__ == "__main__":
    str, size = input().split()
    
    perm = permutations(sorted(str), int(size))
    
    for p in perm:
        print(''.join(p))

# https://www.hackerrank.com/challenges/itertools-permutations/problem?isFullScreen=true