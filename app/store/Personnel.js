Ext.define('Jobs.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personnel',


    fields: [
        'jobId', 'title', 'type', 'category', 'location', 'reference'
    ],

    data: {
        items: [
            { jobId: '1', title: "Software Engineer", type: "Permanent", category: "IT", location: "Dhaka", reference: "https://jobs.smartrecruiters.com/ChhutiBangladeshLimited/743999666276876-junior-software-engineer-backend-?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" },
            { jobId: '2', title: "Assistant HR Manager", type: "Permanent", category: "Management", location: "Dhaka", reference: "https://www.careerz360.com/bangladesh/maheen-dizayn-etiket-bd.-ltd.-asst.-manager-sr.-executive-hr-admin-compliance-narayanganj-jobs-107234?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" },
            { jobId: '3', title: "Accountant", type: "Internship", category: "Accounts", location: "Chattagram", reference: "https://www.closewe.com/amp/job/1707?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" },
            { jobId: '4', title: "Software Engineer", type: "Temporary", category: "IT", location: "Khulna", reference: "https://www.arena.com.bd/job/sr-software-engineer-php/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
