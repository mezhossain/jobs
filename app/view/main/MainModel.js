/**
 * This class is the view model for the Main view of the application.
 */
 Ext.define('Jobs.view.main.MainModel', {
 	extend: 'Ext.app.ViewModel',

 	alias: 'viewmodel.main',

 	data: {
 		name: 'Jobs',
 		selectedJob: null,
 		nameFilter: null
 	},

 	stores: {
 		Jobs: {
			model: 'Jobs.model.Job',
 			autoLoad: {start: 0, limit: 14},
 			pageSize: 14,
 			remoteSort: false,
 			remoteFilter: false,
 			autoSync: true,
 			proxy : {
 				type : 'rest',
 				url: '/jobs',
 				reader : {
 					type: 'json',
 					rootProperty : 'jobs'
 				},
 				writer : {
 					writeAllFields : true
 				}
 			} 
 		}
 	}
 });
