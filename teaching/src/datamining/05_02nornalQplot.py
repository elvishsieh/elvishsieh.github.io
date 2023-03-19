import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as stats
 
# pip install statsmodels
# import statsmodels.api as sm
 
# Generate some random normally distributed data
np.random.seed(30)
data = np.random.normal(loc=10, scale=2, size=30)
 
# Create a normal quantile plot
stats.probplot(data, dist="norm", plot=plt)
# fig = sm.qqplot(data, line='s')
 
# Customize the plot
font = {'family' : 'Times New Roman',
        'weight' : 'bold',
        'size'   : 16}

plt.rc('font', **font)
plt.title('Normal Q-Q plot')
plt.xlabel('Theoretical quantiles')
plt.ylabel('Sample quantiles')
plt.show()