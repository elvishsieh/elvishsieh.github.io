def factorial(n):
    print("階乘函式 factorial(n) 已經呼叫： " + str(n) + " 階乘")
    if n == 1:
        return 1
    else:
        result = n * factorial(n-1)
        print(n, " 階乘呼叫前一次的結果： ", n, " * factorial(" ,n-1, "): ",result)
        return result

print(factorial(6))
