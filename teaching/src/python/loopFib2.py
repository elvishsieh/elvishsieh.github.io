def loopFib2(n):
    a, b = 0, 1 # a = 0, b = 1
    for i in range(n):
        a, b = b, a + b # a = b, b = a + b
        print (a)
        # 當n = 4，for 迴圈做4次
        # n = 1， 則 a = 1, b = 1;
        # n = 2， 則 a = 1, b = 2;
        # n = 3， 則 a = 2, b = 3;
        # n = 1， 則 a = 3, b = 5

if __name__=='__main__':
    print(loopFib2(12))
