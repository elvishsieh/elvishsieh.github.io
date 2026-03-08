import segno
def teachingWeb(URL, course_list):
    result = [None]*len(course_list)
    for i in range(len(course_list)):
        website = URL + f'{course_list[i]}/'
        result[i] = website

    return result

def simpleQRcode(inURL, savename):
    qrcode = segno.make_qr(inURL, error='h')
    qrcode.save(savename, scale=5, dark='navy', border=2, light='gray')
    # color refer to https://en.wikipedia.org/wiki/Web_colors

if __name__ == '__main__':
    dir = f'output/websites/'
    weblocal = f'https://elvishsieh.github.io/teaching/'
    course_name = ['html5', 'office', 'dataMining', 'infoSecurity', 'projectManagement', 'sa', 'stisp', 'python', 'cpp']
    twebsite = teachingWeb(weblocal, course_name)
    for i in range(len(twebsite)):
        filename = course_name[i]
        qrURL = f'{twebsite[i]}'
        pathfname = f'{dir}' + f'{filename}.png'
        # print(qrURL) # for debug
        # print(pathfname) # for debug
        simpleQRcode(qrURL, pathfname)