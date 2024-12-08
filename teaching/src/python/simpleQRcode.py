import segno
qrcode = segno.make_qr("https://elvishsieh.github.io/teaching/python", error='h')
qrcode.save(f"simpleQRcode.png", scale=5, dark='mintcream', border=2, light='navy')