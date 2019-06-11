Ext.define('Jobs.view.job.JobsList',{
	extend: 'Ext.grid.Panel',
	xtype: 'jobslist',

	title: 'Jobs',

	columns: [
        { text: 'Job ID',  dataIndex: 'jobId', width: 100 },
        { text: 'Title', dataIndex: 'title', width: 230 },
        { text: 'Type', dataIndex: 'type', width: 150 },
        { text: 'Category', dataIndex: 'category', width: 150 },
        { text: 'Location', dataIndex: 'location', width: 150 }
    ],

})