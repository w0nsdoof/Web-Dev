def count_substring(text, pattern):
    cnt = 0
    for i in range(len(text)):
        if text[i:i+len(pattern)] == pattern:
            cnt += 1
    return cnt

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)

# https://www.hackerrank.com/challenges/find-a-string/problem?isFullScreen=true