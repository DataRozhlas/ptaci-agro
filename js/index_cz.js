
    var timelines = [
        ["Česko",100,108.5,116.2,117,118.4,133.9,122.3,99,85.8,80.7,85.1,91.5,92.2,85.7,107.6,84.4,72.8,70.5,85.3,78.2,68.9,63.7,63.4,66.4,69.1],
    ];

    var dataSeries = [];
    timelines.forEach(function(line) {
        dataSeries.push({
            'name': line[0],
            'data': line.slice(1)
        })
    });

    Highcharts.chart('ubytek_cr', {
        credits: {
            enabled: false
        },
        title: {
            text: 'Ukazatel běžných druhů ptáků zemědělské krajiny pro ČR, 1990-2014'
        },
        yAxis: {
            title: {
                text: '% ve vztahu k roku 1990'
            }
        },
        legend: {
            enabled: false,
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
                enableMouseTracking: false,
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