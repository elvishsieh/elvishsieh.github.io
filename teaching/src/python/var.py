string = "The global variable "
x = 20

def varfunction():
  string = "The local variable "
  x = 10
  print(string + "x is", x)

varfunction()

print(string + "x is", x)
