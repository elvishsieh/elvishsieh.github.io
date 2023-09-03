import matplotlib.pyplot as plt
import numpy as np
import Orange

# import os
# os.chdir("D:\\Teaching\\dataMining\\dataset")
# plt.style.use('./datamining.mplstyle')
data =  Orange.data.Table("age.csv")

bxmean = np.mean(data)
bxstd = np.std(data)

bx = np.random.normal(bxmean, bxstd, 18) # normal(mu, sigma, size) 

fig = plt.figure(figsize =(10, 7))

plt.boxplot(bx)

# Customize the plot
plt.rcParams['font.sans-serif'] = ['Microsoft JhengHei']
plt.title('Boxplot (箱型圖)')
plt.xticks([1], ['Age Dataset'])
plt.show()