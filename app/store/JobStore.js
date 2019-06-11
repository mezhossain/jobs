Ext.define('Job.store.JobStore', {
    extend: 'Ext.data.Store',

    alias: 'store.jobstore',

    fields: [
        'jobId', 'title', 'type', 'category', 'location'
    ],

    data: { items: [
        { jobId: '1', title: "Software Engineer", type: "Permanent", category: "IT", location: "Dhaka" },
        { jobId: '2', title: "Assistant HR Manager", type: "Permanent", category: "Management", location: "Dhaka" },
        { jobId: '3', title: "Accountant", type: "Internship", category: "Accounts", location: "Chattagram" },
        { jobId: '4', title: "Software Engineer", type: "Temporary", category: "IT", location: "Khulna" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});