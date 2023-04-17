# source code get from https://pywavelets.readthedocs.io/en/latest/index.html
from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
import pywt

# Load image
#original = pywt.data.camera() # image from PyWavelets
A = imread("D:/Teaching/dataMining/dataset/images/avatar.png")
original = np.mean(A, -1)

# check point
# print(original)
titles = ['Approximation', ' Horizontal detail',
          'Vertical detail', 'Diagonal detail']
coeffs2 = pywt.dwt2(original, 'bior1.3')
LL, (LH, HL, HH) = coeffs2
fig = plt.figure(figsize=(10, 10))
fig
for i, a in enumerate([LL, LH, HL, HH]):
    ax = fig.add_subplot(1, 4, i + 1) 
    ax.imshow(a, interpolation="nearest", cmap=plt.cm.gray)
    ax.set_title(titles[i], fontsize=12)
    ax.set_xticks([])
    ax.set_yticks([])

fig.tight_layout()
# plt.savefig('D:/Teaching/dataMining/dataset/images/avatar{0}.png'.format(i), format='png')
plt.show()