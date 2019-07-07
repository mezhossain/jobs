/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Jobs.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    deleteJob() {
		Ext.Msg.confirm('Delete Confirm','Are you sure you want to delete this job?', this.onDeleteJobConfirm, this);
	},

	onDeleteJobConfirm(choice) {
		if (choice === 'yes') {
			const selectedJob = this.getViewModel().get('selectedJob');
			selectedJob.erase({
				callback: e => {
					// Ext.toast({
					// 	html: 'Job deleted',
					// 	title: 'Info',
					// 	width: 200,
					// 	align: 't',
					// 	shadow: true
					// });
					Ext.Ajax.request({
                        url: '/api/jobs/delete/{id}',
                        method  : 'DELETE',
                        jsonData: Ext.create('Jobs.model.Job').getData(),
                        success: function(response){
               				Ext.Msg.alert('Status', 'Deleted successfully.');
                        },
                        failure: function(response){
                        	Ext.Msg.alert('Status', 'Deletion failed');
                        }
                    });
					this.getStore('Jobs').load();
				}
			});
		}
	},
	newJob() {
		var thisInstance = this;
		win = Ext.create('Ext.Window', {
			extend: 'Ext.window.Window',
			title: 'New Job',
			iconCls: 'x-fa fa-plus',
			layout:'form',
			xtype:'form',
			width:400,
			plain: true,
			items: [
			{
				xtype : 'textfield',
				fieldLabel: 'Job ID',
				name:'jobId'
			},{
				xtype : 'textfield',
				fieldLabel: 'Job Title',
				name:'title'
			},{
				xtype: 'textfield',
				name: 'type',
		        fieldLabel: 'Type',
			},{
				xtype : 'textfield',
				fieldLabel: 'Category',
				name:'category'
			},{
				xtype : 'textfield',
				fieldLabel: 'Location',
				name:'location'
			}],
			dockedItems:[
			{
				xtype:'toolbar',
				dock: 'bottom',
				ui:'footer',
				items:[
				{
					xtype:'button',
					text:'Cancel',
					handler:function(){
						win.close();
					}
				},'->',{
					xtype:'button',
					text:'Save',
                      //Saving an issue starts from here
                    listeners:{
                      	click:function()
                      	{
                      		var newJobID = this.up('window').down('textfield[name=jobId]').getValue();
                      		var newJob= this.up('window').down('textfield[name=title]').getValue();
                      		var type = this.up('window').down('textfield[name=type]').getValue();
                      		var category = this.up('window').down('textfield[name=category]').getValue();
                      		var location = this.up('window').down('textfield[name=location]').getValue();
                      		Ext.toast("Job ID : "+newJobID+"<br>Job: "+newJob+"<br>Type: "+type+"<br>Category: "+category+"<br>Location: "+location);
                      		var Job = new Jobs.model.Job({
                      			jobId: newJobID,
                      			title: newJob,
                      			type: type,
                      			category: category,
                      			location: location
                      		});
                      		thisInstance.getStore('Jobs').insert(0, Job);
                      		thisInstance.getStore('Jobs').sync();
                      		Ext.Ajax.request({
            					url : 'jobs/add',
					            method : 'POST',
					            params:{
									ajax_req: Ext.util.JSON.encode(Job)
								},
					            jsonData : Ext.create('Jobs.model.Job').getData(),
					            success : function(response) {
					                Ext.Msg.alert('Status', 'Saved successfully.');
					            },
					            failure : function(response){
					                Ext.Msg.alert('Status', 'Save failed.'); 
					            }
        					});
                          	win.close();
                        }
                    }
                }]
            }]
        }).show();
	}
});
