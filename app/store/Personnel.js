Ext.define('Jobs.store.Personnel', {
    extend: 'Ext.data.Store',
   
    alias: 'store.personnel',
   


    fields: [
        'jobId', 'title', 'type', 'category', 'location', 'vacancies'
    ],

    data: [
        { jobId: '1', title: "Software Engineer", type: "Permanent", category: "IT", location: "Dhaka", vacancies: 123},
        { jobId: '2', title: "Assistant HR Manager", type: "Permanent", category: "Management", location: "Dhaka", vacancies: 56 },
        { jobId: '3', title: "Accountant", type: "Internship", category: "Accounts", location: "Chattagram", vacancies: 94 },
        { jobId: '4', title: "Software Engineer", type: "Temporary", category: "IT", location: "Khulna", vacancies: 76 }
    ],

    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // },

    autoLoad: true
    
});
