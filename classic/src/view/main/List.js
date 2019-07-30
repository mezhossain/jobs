Ext.define('Jobs.view.main.JobList', {
   extend: 'Ext.ux.LiveSearchGridPanel',
   xtype: 'mainlist',

   requires: [ 
   'Ext.toolbar.TextItem', 
   'Ext.form.field.Checkbox',
   'Ext.form.field.Text',
   'Ext.ux.statusbar.StatusBar'
  ],
  controller: 'main',
  viewModel: 'main',
  layout: 'fit',
  scrollable: true,

  id: 'jobGrid',
  title: 'Jobs',

  // plugins: [ Ext.create('Ext.grid.plugin.RowEditing',
  //   {
  //     clicksToEdit: 2,
  //     autoUpdate: true,
  //   })],
  //selModel: 'cellmodel',
/*  plugins: [ Ext.create('Ext.grid.plugin.RowEditing',
    {
      clicksToEdit: 2,
      autoUpdate: true,
    })],*/

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
  }], 
  listeners:{
    itemdblclick:'onDoubleClick',
  }
});
