from with_main import add
def prtTitle():
    print("__name__ is " + __name__ + ".")

if __name__ == '__main__':
    prtTitle()
    print(add(1, 2))