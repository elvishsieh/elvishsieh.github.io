import Orange,os

os.chdir("C:/Users/USER/Documents/dataMining/dataset")
data = Orange.data.Table("clenses")

print("Attributes:", ", ".join(x.name for x in data.domain.attributes))
print("Class:", data.domain.class_var.name)
print("Data instances", len(data))

target = "soft"
print("Data instances with %s prescriptions:" % target)
atts = data.domain.attributes
for d in data:
	if d.get_class() == target:  # 找 target feature 內 value = soft 的 instance
		print(" ".join(["%14s" % str(d[a]) for a in atts]))