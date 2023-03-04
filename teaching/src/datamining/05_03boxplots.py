import matplotlib.pyplot as plt
import numpy as np
import Orange

# import os
# os.chdir("D:\\Teaching\\dataMining\\dataset")

data =  Orange.data.Table("age.csv")

bxmean = np.mean(data)
bxstd = np.std(data)

bx = np.random.normal(bxmean, bxstd, 18) # normal(mu, sigma, size) 

fig = plt.figure(figsize =(10, 7))

plt.boxplot(bx)

plt.show()