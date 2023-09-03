import matplotlib.pyplot as plt
import numpy as np
import Orange
import pandas as pd

# import os  # if your data is saved on the following path.
# os.chdir("C:\\Users\\USER\\Documents\\dataMining\\dataset")

data =  Orange.data.Table("sold2.csv")
dd = pd.DataFrame(data)
x = np.arange(len(dd))
y = dd[1]
xaxis = dd[0]
plt.scatter(x, y)

# Customize the plot
font = {'family' : 'Times New Roman',
        'weight' : 'bold',
        'size'   : 16}

plt.rc('font', **font)
plt.xlabel('Unit Price')
plt.ylabel('Count of items sold')
plt.title('A scatter for unit price with Python')
plt.show()