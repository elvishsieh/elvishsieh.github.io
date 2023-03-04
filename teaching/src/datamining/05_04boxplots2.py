import matplotlib.pyplot as plt
import numpy as np
import Orange

# import os
# os.chdir("D:\\Teaching\\dataMining\\dataset") # if your data is saved on the path.

twoColumn =  Orange.data.Table("age2.csv")

mn = np.mean(twoColumn,0) # mean of rows
bxstd = np.std(twoColumn,0) # std of rows

bx1 = np.random.normal(mn[0], bxstd[0], 18) # normal(mu, sigma, size) 
bx2 = np.random.normal(mn[1], bxstd[1], 18)

bxAll = [bx1, bx2] # merge in array

fig = plt.figure(figsize =(10, 7))

plt.boxplot(bxAll)

plt.show()