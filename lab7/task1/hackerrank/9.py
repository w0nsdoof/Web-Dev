from itertools import product

if __name__ == "__main__":
    A = list(map(int, input().split()))
    B = list(map(int, input().split()))
    
    cartesian_product = list(product(A, B))
    
    for item in cartesian_product:
        print(item, end=" ")

# https://www.hackerrank.com/challenges/itertools-product/problem?isFullScreen=true