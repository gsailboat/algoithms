def second(arr):
	mi = 0
	s = 0
	namem = []
	names = []

	for i in range(len(arr)):
		if arr[i][1] < mi:
			s = mi
        	mi = arr[i][1]
        	names = namem
        	namem = [arr[i][0]]
        elif arr[i][1] < s and arr[i][1] > mi:
        	s = arr[i][1]
        	names = [arr[i][0]]
        elif arr[i][1] == s:
        	names.append(arr[i][0])
        elif arr[i][1] == mi:
        	names.append(arr[i][0])
    names.sort()
    return names

second([['Harry', 33], ['Barry', 33], ['Mim', 22], ['Dad', 55]])