/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Jobs.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Jobs',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    //stores: {
	// 	jobs: {
	// 		model: 'Jobs.model.Jobs',
	// 		pageSize: 100,
	// 		autoLoad: true,
	// 		remoteSort: true,
	// 		remoteFilter: true,
	// 		autoSync: false,
	// 		sorters: [ {
	// 			property: 'lastName',
	// 			direction: 'ASC'
	// 		} ],
	// 		listeners: {
	// 			load: 'onStoreLoad'
	// 		},
	// 		filters: [ {
	// 			property: 'category',
	// 			value: '{categoryFilterCB.value}'
	// 		}, {
	// 			property: 'name',
	// 			value: '{nameFilter}'
	// 		} ]
	// },

    //TODO - add data, formulas and/or methods to support your view
});
