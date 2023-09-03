import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
iris = pd.read_csv('D:/Teaching/datamining/dataset/iris.csv')

# find keyword in the variety row of iris dataframe that is Setosa in the variety row.
setosa = iris.loc[iris['variety'] == 'Setosa']
# print(setosa) # check point
versicolor = iris.loc[iris['variety'] == 'Versicolor']
virginica = iris.loc[iris['variety'] == 'Virginica']

# Compare septal length and width among Setosa, Versicolor and Virginica
# ------------------------------------------
x1 = setosa['sepal.length']
y1 = versicolor['sepal.length']
x2 = setosa['sepal.length']
y2 = virginica['sepal.length']
x3 = versicolor['sepal.length']
y3 = virginica['sepal.length']

plt.figure(figsize=(10,6)) # setting figure size for savfig() method
plt.scatter(x1,y1, marker='$x$', c='black', linewidths=0.5, label="Setosa-Versicolor")
plt.scatter(x2,y2, marker='^',  c='black', linewidths=0.5, label="Setosa-Virginica")
plt.scatter(x3,y3, marker='*',  c='black', linewidths=0.5, label="Versicolor-Virginica")

# Customize the plot
plt.title('2-D Scatter Plot', fontsize=16, fontweight='bold')
plt.xlabel('X-Axis', fontsize=14, fontweight='bold')
plt.ylabel('Y-Axis', fontsize=14, fontweight='bold')
plt.legend(title='The Iris Datasets',loc='lower right')
# plt.savefig('D:/github/elvishsieh.github.io/images/datamining/2dScatter.png', format='png')
plt.show()