def  loopFactorial(n):
    if (n <= 1):
        return 1
    else:
        i = 1
        result = 1
        while(i <= n):
            result = result * i
            print(i, " 階乘的結果是：  ", result)
            i = i + 1

        return result

print(loopFactorial(10))
