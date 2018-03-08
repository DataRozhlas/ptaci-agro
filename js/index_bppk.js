
    var timelines = [
        ["Česká republika",100,108.5,116.2,117,118.4,133.9,122.3,99,85.8,80.7,85.1,91.5,92.2,85.7,107.6,84.4,72.8,70.5,85.3,78.2,68.9,63.7,63.4,66.4,69.1],
        ["Agregace EU",100,94.6,99.1,98.9,95,83.9,84.2,86.5,82.4,85,81.3,81.6,76.6,78,79.9,77.7,76.1,75.6,75.4,73.3,71,72.9,71.2,69.1,68.5],
        ["Belgie",100,99.4,83.4,92.2,84.7,82.6,85.9,80.1,77.4,80.1,68.5,83.1,63.2,60.4,69.4,62,66.6,64.5,62.9,59.2,65.8,59.9,60.6,49.4,56.6],  
        ["Německo",100,96,94.5,95.5,102.1,99.5,101.4,95.8,93.2,101.3,96.6,92.4,92.8,91.4,95.2,92.9,91.6,92.3,89.4,88.1,84.3,78.5,82.6,79.8],
        ["Francie",100,80.9,89.9,80.6,83.6,80.9,79.9,88.1,85,74.8,75.9,77.9,70.4,68.1,71.1,74.4,70.2,71.2,71.8,65.4,64.3,63.9,62.2,61,59.3],
        ["Finsko",100,104.5,97.5,85.8,92.2,89.7,79.9,79.1,84.8,79.6,74.9,86.9,83.7,78.7,80.4,79.1,74.2,76.9,75,71.9,61.4,65.7,61.5,59.4,61.1],
        ["Spojené království",100,94.3,89.2,83.5,85.3,88.3,86.7,84.8,79.8,79.5,82.9,82.5,81.9,82.5,81.9,80.9,79.8,75,76.6,74.4,72,71.7,72.5,65.1,66.2],
        ["Švýcarsko",100,92.7,98.3,99.9,97.9,100.3,100,91.8,81.5,94.3,97.6,95.8,88.4,90.1,91.4,92.4,92,93.9,92.9,89.1,94.4,94.3,104,96,97.4]
    ];

    var dataSeries = [];
    timelines.forEach(function(line) {
        dataSeries.push({
            'name': line[0],
            'data': line.slice(1)
        })
    });

    Highcharts.chart('index_eu', {
        credits: {
            enabled: false
        },
        title: {
            text: 'Ukazatel běžných druhů ptáků zemědělské krajiny, 1990-2014'
        },
        yAxis: {
            title: {
                text: '% ve vztahu k roku 1990'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        colors: [
            '#e41a1c',
            '#377eb8',
            '#8dd3c7',
            '#bebada',
            '#fb8072',
            '#80b1d3',
            '#fdb462',
            '#b3de69'
        ],
        plotOptions: {
            line: {
                marker: {
                    enabled: false,
                    radius: 3,
                    symbol: 'circle'
                }
            },
            series: {
                label: {
                    connectorAllowed: false
                },
                tooltip: {
                    valueSuffix: ' % vzhledem k roku 90'
                },
                pointStart: 1990
            }
        },

        series: dataSeries,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });