def repeat(word, n):
	print(word * n)
## add a empty line
def happybirthday(name):
	argWords = "Happy Birthday to you!"
	repeat(argWords, 2)
	repeat("Happy Birthday, dear " + name, 1)
	repeat(argWords, 1)
## add a empty line
happybirthday("Elvis")