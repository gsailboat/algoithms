import json

jsonFile = open("./test.json")
jsonString = jsonFile.read()
jsonData = json.loads(jsonString)
type(jsonData)

products = []

def fillProducts(line):
	added = False

	for p in products:
		if (line['product_id'] == p['name']):
			if line['user_id'] not in p['users']:
				# print line['user_id']
				p['users'].append(line['user_id'])
			p['quantity'] += line['quantity']
			added = True
	if added == False:
		products.append({
			'name': line['product_id'],
			'users': [line['user_id']],
			'quantity': line['quantity']
		})


def loopProducts():
	for d in jsonData:
		fillProducts(d)

def mostCustomers(products):
	userp = [products[0]];
	quantityp = [products[0]];

	for p in products:
		if len(p['users']) > len(userp[0]['users']):
			userp = [p]
		elif len(p['users']) == len(userp[0]['users']):
			userp.append(p)
		if p['quantity'] > quantityp[0]['quantity']:
			quantityp = [p]
		elif p['quantity'] == quantityp[0]['quantity']:
			quantityp.append(p);
	# answer[0].name is the product with the most users
	# answer[1].name is the product with the largest quantity of sales
	answer = [[], []]
	for u in userp:
		answer[0].append(u['name'])
	for q in quantityp:
		answer[1].append(q['name'])
	return answer

loopProducts()
print mostCustomers(products)
