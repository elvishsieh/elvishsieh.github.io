import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

iris = pd.read_csv('D:/Teaching/datamining/dataset/iris.csv')
# print(iris) # check point

# find keyword in the variety row of iris dataframe that is Setosa in the variety row.
setosa = iris.loc[iris['variety'] == 'Setosa']
# print(setosa) # check point
versicolor = iris.loc[iris['variety'] == 'Versicolor']
virginica = iris.loc[iris['variety'] == 'Virginica']

# Compare septal length and width among Setosa, Versicolor and Virginica
# ------------------------------------------
x1 = setosa['sepal.length']
# print(x1) # check point
y1 = versicolor['sepal.length']

x2 = setosa['sepal.length']
y2 = virginica['sepal.length']
x3 = versicolor['sepal.length']
y3 = virginica['sepal.length']

xx1 = setosa['sepal.width']
yy1 = versicolor['sepal.width']
xx2 = setosa['sepal.width']
yy2 = virginica['sepal.width']
xx3 = versicolor['sepal.width']
yy3 = virginica['sepal.width']

plt.figure(2,figsize=(10,10)) # setting 2 figures and size for savfig() method
plt.subplot(211)

# marker symbols: "$f$", "$\u266B$", r"$\mathcal{A}$"
plt.scatter(x1,y1, marker='x', linewidths=0.5, label="Setosa-Versicolor",c='black')
plt.scatter(x2,y2, marker='^', linewidths=0.5, label="Setosa-Virginic")
plt.scatter(x3,y3, marker='+', linewidths=0.5, label="Versicolor-Virginic")
plt.title('Three kinds of septal\'s length comparison', fontsize=16, fontweight='bold')
plt.xlabel('Sepal Length', fontsize=14)
plt.ylabel('The others Sepal Length', fontsize=14)
#plt.legend(title='Iris Datasets',loc='center right', fancybox=True, bbox_to_anchor=(1.35, 0.5)) # out of the box
plt.legend(title='Iris Datasets',loc='lower right')
plt.savefig('D:/github/elvishsieh.github.io/images/datamining/irisScatter3.png', format='png')

plt.figure(1, figsize=(10,10))
plt.subplot(211) 
plt.scatter(xx1,yy1, marker='*', s=150, linewidths=0.5, label="Setosa-Versicolor", c='r')
plt.scatter(xx2,yy2, marker='>', linewidths=0.5, label="Setosa-Virginic", c='g')
plt.scatter(xx3,yy3, marker='$\mathcal{A}$', linewidths=0.5, label="Versicolor-Virginic", c='b')

# Customize the plot
plt.title('Three kinds of septal\'s width comparison', fontsize=16, fontweight='bold')
plt.xlabel('Sepal Width', fontsize=14)
plt.ylabel('The others Sepal Width', fontsize=14)
#plt.legend(title='Iris Datasets',loc='center right', fancybox=True, bbox_to_anchor=(1.35, 0.5)) # out of the box
plt.legend(title='The Iris Datasets',loc='lower right')
plt.savefig('D:/github/elvishsieh.github.io/images/datamining/irisScatter3.png', format='png')
plt.show()