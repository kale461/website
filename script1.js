// Line chart
var lineCtx = document.getElementById('line-chart').getContext('2d');
var lineChart = new Chart(lineCtx, {
	type: 'line',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [{
			label: 'Sales',
			data: [3, 5, 2, 7, 9, 6, 8],
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 2,
			fill: false
		}]
	},
	options: {
		title: {
			display: true,
			text: 'Sales Trend'
		},
		legend: {
			display: false
		}
	}
});

// Bar chart
var barCtx = document.getElementById('bar-chart').getContext('2d');
var barChart = new Chart(barCtx, {
	type: 'bar',
	data: {
		labels: ['A', 'B', 'C', 'D', 'E'],
		datasets: [{
			label: 'Values',
			data: [5, 3, 7, 2, 6],
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgba(54, 162, 235, 1)',
			borderWidth: 1
		}]
	},
	options: {
		title: {
			display: true,
			text: 'Bar Chart'
		},
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
});

// Pie chart
var pieCtx = document.getElementById('pie-chart').getContext('2d');
var pieChart = new Chart(pieCtx, {
	type: 'pie',
	data: {
		labels: ['A', 'B', 'C', 'D', 'E'],
		datasets: [{
			data: [12, 19, 3, 5, 2],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
            ]
        }
    ]
}
}
)
