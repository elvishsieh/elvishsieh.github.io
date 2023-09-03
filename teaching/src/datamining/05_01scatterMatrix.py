# 05_01scatterMatrix.py
import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('D:/Teaching/datamining/dataset/iris.csv')

pd.plotting.scatter_matrix(df, figsize=(10, 6), diagonal = 'kde')

# Customize the plot
plt.suptitle('Scatter Matrix with Pandas')
plt.savefig('D:/github/elvishsieh.github.io/images/datamining/scatterMatrix.png', facecolor='w', edgecolor='w', format='png')

plt.show()