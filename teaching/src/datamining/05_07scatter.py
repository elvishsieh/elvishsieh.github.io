# 05_07scatter.py
import matplotlib.pyplot as plt
import numpy as np
import Orange
import pandas as pd

# import os  # if your data is saved on the following path.
# os.chdir("C:\\Users\\USER\\Documents\\dataMining\\dataset")
# plt.style.use('./datamining.mplstyle')

data =  Orange.data.Table("sold2.csv")
dd = pd.DataFrame(data)
x = np.arange(len(dd))
y = dd[1]

# Customize the plot
plt.scatter(x, y)
plt.xlabel('Unit Price')
plt.ylabel('Count of items sold')
plt.title('A scatter for unit price with Python')
plt.show()