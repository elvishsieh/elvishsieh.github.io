import matplotlib.pyplot as plt
import numpy as np
import Orange
import pandas as pd

import os # if your data is saved in the following path.
os.chdir("D:\\Teaching\\dataMining\\dataset")
	
data =  Orange.data.Table("sold.csv") # twoColumn

dd = pd.DataFrame(data)

xx = dd[0]
yy = dd[1]

bins = [40,59,60,79,80,99,100,119,120,139]
plt.hist(x=xx,bins=bins,weights=yy,color='#0504aa',alpha=0.7,edgecolor='purple')

# Customize the plot
font = {'family' : 'Times New Roman',
        'weight' : 'bold',
        'size'   : 18}

plt.rc('font', **font)
plt.xlabel('Unit Price')
plt.ylabel('Count of items sold')
plt.title('A histogram diagram for unit price with Python')
plt.grid(True)
plt.show()