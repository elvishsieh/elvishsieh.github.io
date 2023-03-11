import matplotlib.pyplot as plt
import numpy as np
import scipy.stats as stats
import Orange
# import os # if your data is saved in the following path.
# os.chdir("D:\\Teaching\\dataMining\\dataset")
    
data =  Orange.data.Table("sold.csv") # twoColumn
soldmean = np.mean(data, 0) #mean
soldstd = np.std(data, 0) #standard deviation
    
normalQ = np.random.normal(soldmean[0], soldstd[0], 9) #normal(mu, sigma, size)
    
# Create a normal quantile plot
stats.probplot(normalQ, dist="norm", plot=plt)
# fig = sm.qqplot(normalQ, line='s')
    
# Customize the plot
font = {'family' : 'Times New Roman',
        'weight' : 'bold',
        'size'   : 16}

plt.rc('font', **font)
plt.title('A normal quantile plot for the unit price data')
plt.xlabel('Theoretical quantiles')
plt.ylabel('Unit Price')
plt.show()