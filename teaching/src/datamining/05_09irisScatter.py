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

# Setosa: Sepal's, Petal's length and width
# ------------------------------------------
sx1 = setosa['sepal.length']
# print(x1) # check point
sy1 = setosa['sepal.width']
sx2 = setosa['petal.length']
sy2 = setosa['petal.width']

plt.figure(figsize=(10,6)) # setting figure size for savfig() method
# marker symbols: "$f$", "$\u266B$", r"$\mathcal{A}$"
plt.scatter(sx1,sy1, marker='$\u266B$', s=150, linewidths=0.5, label="Setosa Sepal")
plt.scatter(sx2,sy2, linewidths=0.5, label="Setosa Petal")

# Customize the plot
plt.title('Iris dataset scatter plot', fontsize=16, fontweight='bold')
plt.xlabel('Sepal or Petal Length', fontsize=14)
plt.ylabel('Sepal or Petal Width', fontsize=14)
#plt.legend(title='Iris Datasets',loc='center right', fancybox=True, bbox_to_anchor=(1.35, 0.5)) # out of the box
plt.legend(title='The Iris Datasets',loc='lower right')
#plt.savefig('D:/github/elvishsieh.github.io/images/datamining/irisScatter.png', format='png')
plt.show()