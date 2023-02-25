import numpy as np
import matplotlib.pyplot as plt
import statsmodels.api as sm

# Generate some random normally distributed data
np.random.seed(123)
data = np.random.normal(loc=10, scale=2, size=30)

# Create a normal quantile plot
fig = sm.qqplot(data, line='s')

# Customize the plot
plt.title('Normal Q-Q plot')
plt.xlabel('Theoretical quantiles')
plt.ylabel('Sample quantiles')
plt.show()