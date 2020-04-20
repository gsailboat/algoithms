def equalsWhenOneCharRemoved(x, y):
	if len(x) == len(y) + 1 or len(x) + 1 == len(y):
		once = False
		longer = x if len(x) > len(y) else y
		shorter = x if len(x) < len(y) else y
		for i,c in enumerate(shorter):
			a = i + 1 if once else i
			if longer[a] != c and once == False:
				once = True
				a += 1
			if longer[a] != c and once:
				return False
	else:
		return False
	return True

print(equalsWhenOneCharRemoved('xlxfffffffffr', 'xlfffffffffx'));