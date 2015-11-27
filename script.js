
TESTER = document.getElementById('tester');
	Plotly.plot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
		xaxis: {title: 'Life Expectancy'},
		yaxis: {title: 'GDP per Capita'},
		margin: { t: 0 } } 
	);