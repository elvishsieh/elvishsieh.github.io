from tp import download
from IPython import get_ipython
ipython = get_ipython()

def reverse_word(word):
    return ''.join(reversed(word))

def too_slow():
    count = 0
    for word in word_list:
        if reverse_word(word) in word_list:
            count += 1
    return count

if __name__ == '__main__':
    download('https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/words.txt')
    word_list = open('words.txt').read().split()
    print(len(word_list))
    
    %time too_slow()