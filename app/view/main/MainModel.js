/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Jobs.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
    	name: 'Jobs',
        selectedIssue: null,
		nameFilter: null
    },

    stores: {
		Jobs: {
			model: 'Jobs.model.Job',
			autoLoad: true,
			pageSize: 0,
			remoteSort: false,
			remoteFilter: false,
			autoSync: true,
		}
	}
});
