def hanoi(disk, start='A 柱(開始)', middle='B 柱(中介)', dest='C 柱(目的)'):
    intDisk = int(disk)
    if (intDisk> 0):
        # 先將 n-1 個圓盤從 A 柱(開始)移動到 B 柱(目的)
        hanoi(intDisk - 1, start, dest, middle)
        print('移動圓盤編號 ' + str(intDisk) + '： 從 ' + start + ' 到 ' + dest)
        # 再將 n-1 個圓盤從 B 柱(中介)移動到 C 柱(目的)
        hanoi(intDisk - 1, middle, start, dest)

if __name__ == '__main__':
    hanoi(input('請輸入 A 柱上面的圓盤數量？ '))
