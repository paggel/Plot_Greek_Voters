Plotly.d3.csv('https://raw.githubusercontent.com/paggel/Plot_Greek_Voters/master/data.csv', function(rows){
	var trace1 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['18-23']
		}),
		name : '18-23',
		type: 'bar'
	};
	var trace2 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['24-29']
		}),
		name : '24-29',
		type: 'bar'
	};
		var trace3 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['30-35']
		}),
		name : '30-35',
		type: 'bar'
	};

		var trace3 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['30-35']
		}),
		name : '30-35',
		type: 'bar'
	};
		var trace4 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['36-41']
		}),
		name : '36-41',
		type: 'bar'
	};
	var trace5 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['42-47']
		}),
		name : '42-47',
		type: 'bar'
	};
	var trace6 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['48-53']
		}),
		name : '48-53',
		type: 'bar'
	};
	var trace7 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['54-59']
		}),
		name : '54-59',
		type: 'bar'
	};
	var trace8 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['60-65']
		}),
		name : '60-65',
		type: 'bar'
	};
	var trace9 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['66-70']
		}),
		name : '66-70',
		type: 'bar'
	};
	var trace10 = {
		x: rows.map(function(row){
			return row['Region Unit']
		}),
		y: rows.map(function(row){
			return row['71 plus']
		}),
		name : '71 plus',
		type: 'bar'
	};

	var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

	var layout = {
	title: 'Greek Voters population',
	xaxis : {
		title:'Region Units'
	},
	yaxis : {
		title: 'Percentage'
	},
    barmode:"stack",
    barnorm:"percent",
};

	Plotly.newPlot('elections', data, layout);


})




