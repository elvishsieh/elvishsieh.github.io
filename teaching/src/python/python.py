### pip install segno qrcode-artistic
import io
import segno
from PIL import Image

URL = f'https://elvishsieh.github.io/teaching/python/'
LOGO = 'images/pythonLogo.png'
OUTPUT = f'output/qrcode.png'

# Make QR code
# color reference: https://en.wikipedia.org/wiki/Web_colors
qrcode = segno.make_qr(URL, error='h')
qrcode.save(OUTPUT, scale=5, dark='DodgerBlue', border=2, light='LightGray')

# Now open that png image to put the logo
img = Image.open(OUTPUT).convert("RGBA")
width, height = img.size

# How big the logo we want to put in the qr code png
logo_size = 50

# Open the logo image
logo = Image.open(LOGO).convert("RGBA")

# Calculate xmin, ymin, xmax, ymax to put the logo
xmin = ymin = int((width / 2) - (logo_size / 2))
xmax = ymax = int((width / 2) + (logo_size / 2))

# resize the logo as calculated
logo = logo.resize((xmax - xmin, ymax - ymin))

# put the logo in the qr code
img.paste(logo, (xmin, ymin, xmax, ymax))

#img.show()
img.save(OUTPUT)