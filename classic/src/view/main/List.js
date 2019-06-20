Ext.define('Jobs.view.main.JobList', {
   //  extend: 'Ext.grid.Panel',
   //  xtype: 'mainlist',

   //  requires: [
   //      'Jobs.store.Personnel',
   //      'Jobs.view.job.SearchTrigger'
   //  ],


   //  searchValue: null,
   //  indexes: [],
   //  currentIndex: null,
   //  searchRegExp: null,

   //  title: 'Jobs',

   //  store: {
   //      type: 'personnel'
   //  },

   //  columns: [
   //      { text: 'Job ID',  dataIndex: 'jobId', flex: 0.1, sortable: true },
   //      { text: 'Title', dataIndex: 'title', flex: 1, sortable: true },
   //      { text: 'Type', dataIndex: 'type', flex: 1, sortable: true },
   //      { text: 'Category', dataIndex: 'category', flex: 1, sortable: true },
   //      { text: 'Location', dataIndex: 'location', flex: 1, sortable: true }
   //  ],


   //  listeners: {
   //      select: 'onItemSelected'
   //  },

   //  dockedItems: [{
   //  	xtype: 'toolbar',
   //  	dock: 'top',
   //  	items:[{
			// xtype: 'searchtrigger',
   //          flex: 4,
   //          autosearch: true
   //  	}]
   //  }],

    extend: 'Ext.ux.LiveSearchGridPanel',
    xtype: 'mainlist',

    requires: [ 
        'Ext.toolbar.TextItem', 
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.ux.statusbar.StatusBar'
    ],
    controller: 'main',
    viewModel:'main',


    title: 'Jobs',

    plugins: [ Ext.create('Ext.grid.plugin.RowEditing',
        {
            clicksToEdit: 2,
            autoUpdate: true,
        }
    )],

    bind : {
      store: '{Jobs}',
      selection: '{selectedJob}'
    },

    columns: [
        { 
            text: 'Job ID',  
            dataIndex: 'jobId', 
            flex: 0.3, 
            sortable: true, 
        },{ 
            text: 'Title', 
            dataIndex: 'title', 
            flex: 1, 
            sortable: true, 
            editor:
            {
                allowBlank: false
            } 
        },{ 
            text: 'Type', 
            dataIndex: 'type', 
            flex: 1, 
            sortable: true, 
            editor:
            {
                allowBlank: false
            }  
        },{ 
            text: 'Category', 
            dataIndex: 'category', 
            flex: 1, 
            sortable: true, 
            editor:
            {
                allowBlank: false
            }  
        },{ 
            text: 'Location', 
            dataIndex: 'location', 
            flex: 1, 
            sortable: true, 
            editor:
            {
                allowBlank: false
            }  
        }
    ],
    // dockedItems: [{
    //   xtype: 'toolbar',
    //   dock: 'bottom',
    //   items:[{
    //     iconCls : 'x-fa fa-plus',
    //     handler : 'newJob'
    //   },{
    //     iconCls : 'x-fa fa-trash',
    //     handler : 'deleteJob',
    //     bind : {
    //       disabled : '{!selectedJob}'
    //     }
    //   }
    // ]
    listeners: [{ afterrender: 'showData' }]
    
});
