def test(n, arr) :
	m = -100
	s = -100

	for i in arr:
		if (i > m):
			s = m
			m = i
		elif (i > s and i < m):
			s = i
	return s
		

print(test(5, {-4,-5,-6,-6,-7}))