import json

def readandstring(file):
	with open(file, "rb") as fin:
		content = json.load(fin);
	return content

print readandstring("./sample.txt");

# maybe make product first then have these as methods that are called after

# products = [];
	# for product in test
	# if object.name != product
	# new object object.name = product
	# if (object.keys !users.include(user) && object.name)
	# object.users.push(user)
	# object.quatity += product.quantity
def popularItem(test):
	# products = [];
	# for product in test
	# if object.name != product
	# new object object.name = product
	# if (object.keys !users.include(user) && object.name)
	# object.users.push(user)
	# max = ""
	# for product in objects
	# if (len(product.users) > max)
	# max = product.name

def quantitySold(test):
	# products = [];
	# max = 0;
	# for product in objects
	# if (product.quantity > max)
	# max = product.quantity