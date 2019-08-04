Ext.define('Jobs.view.chart.Pie', {
    extend: 'Ext.chart.PolarChart',
    requires: [
        'Jobs.store.Personnel',
        'Ext.chart.series.Pie'
    ],
    title: 'Job Vacancies',
    viewModel: 'main',
    layout: 'fit',
    scrollable: true,
    xtype: 'piechart',
    width: 600,
    height: 600,
    animation: {
        easing: 'backOut',
        duration: 500
    },
    // store: {
    //     fields: ['type', 'g1'],
    //     data: [
    //         {'type': 'Temporary', "g1": 57},
    //         {'type': 'Permanent', "g1": 45},
    //         {'type': 'Internship', "g1": 67},
    //         {'type': 'Others', "g1": 67},
    //     ]
    // },
     
    // bind: {
    //     store: '{Jobs}',
    // },

    store: {
        type:'personnel'
    },
     //configure the legend.
    legend: {
        docked: 'right'
    },

     //describe the actual pie series.
    series: [{
        type: 'pie',
        angleField: 'vacancies',
        label: {
           field: 'title'
        },
        donut: 30   // increase or decrease for increasing or decreasing donut area in middle.
    }]
});