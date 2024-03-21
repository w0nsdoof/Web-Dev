if __name__ == '__main__':
    students = []
    
    for _ in range(int(input())):
        name = input()
        score = float(input())
        
        students.append([name, score])
        
    goal = sorted(set(score for name,score in students))[1]
    res = [name for name,score in students if score==goal]
    res.sort()
    
    for student in res:
        print(student)

# https://www.hackerrank.com/challenges/nested-list/problem?isFullScreen=true