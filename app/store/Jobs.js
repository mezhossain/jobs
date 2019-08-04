// Ext.define('Jobs.store.Jobs', {
//     extend: 'Ext.data.Store',
//     alias: 'store.jobs',
//     model: 'Jobs.model.Job',
//     autoLoad: true,
//     pageSize: 14,
//     remoteSort: false,
//     remoteFilter: false,
//     autoSync: true,
//     proxy : {
//         type : 'rest',
//         url: '/jobs',
//         reader : {
//             type: 'json',
//             rootProperty : 'jobs'
//         },
//         writer : {
//             writeAllFields : true
//         }
//     } 
// });