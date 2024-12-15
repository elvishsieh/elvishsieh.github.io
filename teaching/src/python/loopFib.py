def  loopFib2(n):
    if n >= 3:
        prev2 = 0
        prev1 = 1
        for i in range(n):
            fib = prev1 + prev2
            prev1 = prev2
            prev2 = fib

        return fib
    else:
        return 1

if __name__ =='__main__':
    print(loopFib2(1))
    print(loopFib2(2))
    print(loopFib2(3))
    print(loopFib2(4))
    print(loopFib2(5))
    print(loopFib2(6))
    print(loopFib2(7))
    print(loopFib2(8))
    print(loopFib2(9))
    print(loopFib2(10))
    print(loopFib2(11))
    print(loopFib2(12))
