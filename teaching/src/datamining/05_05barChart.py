import matplotlib.pyplot as plt
import numpy as np
import Orange
import pandas as pd

# import os # if your data is saved in the following path.
# os.chdir("D:\\Teaching\\dataMining\\dataset")
	
data =  Orange.data.Table("sold.csv") # twoColumn

dd = pd.DataFrame(data) # row convert into column

x = np.arange(len(dd))
y = dd[1]
xaxis = dd[0]

# Customize the plot
font = {'family' : 'Times New Roman',
        'weight' : 'bold',
        'size'   : 16}

plt.rc('font', **font)
plt.bar(x, y, color=['red', 'orange','yellow', 'green', 'blue', 'indigo', 'purple'])
plt.xticks(x, xaxis)
plt.xlabel('Unit Price')
plt.ylabel('Count of items sold')
plt.title('A bar chart for unit price with Python')
plt.show()