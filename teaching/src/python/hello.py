import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

def fib(n):
    """Fibonacci sequence."""
    if n <= 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

if __name__ == '__main__':
    print("hello world")
    print(fib(5))