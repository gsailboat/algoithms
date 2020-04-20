var graphroute = function(graph, one, two) {
	let keys = Object.keys(graph);
	let values;

	for key in keys {
		if (one.name === Object.keys(graph))
			values = graph[key];
	}
	console.log(values);
}

let gr = {
	1: [3],
	2: [1, 4],
	3: [2],
	4: [1],
}

graphroute(gr, )