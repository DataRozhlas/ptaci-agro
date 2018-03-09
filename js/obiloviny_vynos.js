    var timelines = [
        ["Česko",4019.5,4091.7,4179.3,4192.7,4132.8,3968.1,4346.6,3906,4508.6,4324,3940.8,5444.3,4741.8,4159,4522.2,5363,5074,4695.9,5592.7,4529.5,5309.4,6219.9,5880.6,6317.3]
    ];

    var dataSeries = [];
    timelines.forEach(function(line) {
        dataSeries.push({
            'name': line[0],
            'data': line.slice(1)
        })
    });

    Highcharts.chart('obiloviny_cz', {
        credits: {
            enabled: false
        },
        title: {
            text: 'Výnos obilovin v Česku'
        },
        yAxis: {
            title: {
                text: 'kg na ha'
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
                    valueSuffix: ' kg na hektar'
                },
                pointStart: 1993
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