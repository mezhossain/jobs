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
			console.log(selectedJob);
 			selectedJob.erase({
 				callback: e => {
 					Ext.Ajax.request({
				      	url: '/jobs/delete/{id}',
				      	method: 'DELETE',          
				      	//jsonData:Ext.util.JSON.encode(selectedJob),
				      	param:Ext.util.JSON.encode(selectedJob),
				      	
				      	headers:
				      	{
				      		'Content-Type': 'application/json'
				      	},
				      	success:function(response){
				      		var obj = Ext.decode(response.responseText);
				      		alert(obj);
				      	},                                    
				      	failure: function(){
				      		alert("Failed" );
				      	}
			      	});
			     	this.getStore('Jobs').load();
			 	}
			});
 		}
 	},
 	onDoubleClick:function(dataview, record, item, index, e) {
		var updateForm = Ext.create('Ext.Window', {
			extend: 'Ext.window.Window',
			title: 'Update Job',
			iconCls: 'x-fa fa-plus',
			layout: 'form',
			xtype: 'form',
			width: 400,
			plain: true,
			jsonSubmit: true,
			url: '/jobs/update',

			items: [{
				xtype : 'textfield',
				fieldLabel: 'Job ID',
				name:'jobId',
				value:record.data['jobId']
			},{
				xtype : 'textfield',
				fieldLabel: 'Job Title',
				name:'title',
				value:record.data['title']
			},{
				xtype: 'textfield',
				name: 'type',
				fieldLabel: 'Type',
				value:record.data['type']
			},{
				xtype : 'textfield',
				fieldLabel: 'Category',
				name:'category',
				value:record.data['category']
			},{
				xtype : 'textfield',
				fieldLabel: 'Location',
				name:'location',
				value:record.data['location']
			}],

			dockedItems:[
			{
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				items:[
				{
					xtype: 'button',
					text: 'Cancel',
					handler: function(){
						updateForm.close();
					}
				},'->',{
					xtype: 'button',
					text: 'Update',
                  	listeners: {
                      	click: function()
                      	{
                      		var newJobID = this.up('window').down('textfield[name=jobId]').getValue();
                      		var newJob= this.up('window').down('textfield[name=title]').getValue();
                      		var type = this.up('window').down('textfield[name=type]').getValue();
                      		var category = this.up('window').down('textfield[name=category]').getValue();
                      		var location = this.up('window').down('textfield[name=location]').getValue();
                      		var tempJob = {
                      			jobId: newJobID,
                      			title: newJob,
                      			type: type,
                      			category: category,
                      			location: location
                      		};
    						Ext.Ajax.request({
						      	url: '/jobs/update',
						      	method: 'PUT',          
						      	jsonData:Ext.util.JSON.encode(tempJob),
						      	headers:
						      	{
						      		'Content-Type': 'application/json'
						      	},
						      	success:function(response){
						      		var obj = Ext.decode(response.responseText);
						      		alert(obj);
						      	},                                    
						      	failure: function(){
						      		alert("Failed" );
						      	}
					      	});
        					updateForm.close();
        				}
    				}
    			}]
    		}]
        }).show();
	},

   	newJob() {
	   	var thisInstance = this;
	   	win = Ext.create('Ext.Window', {
	   		extend: 'Ext.window.Window',
	   		title: 'New Job',
	   		iconCls: 'x-fa fa-plus',
	   		layout: 'form',
	   		xtype: 'form',
	   		width: 400,
	   		plain: true,
	   		jsonSubmit: true,
	   		url: '/jobs/add',

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

	   		dockedItems: [{
	   			xtype: 'toolbar',
	   			dock: 'bottom',
	   			ui: 'footer',
	   			items:[{
	   				xtype: 'button',
	   				text: 'Cancel',
	   				handler: function(){
	   					win.close();
	   				}
	   			},'->',{
	   				xtype: 'button',
	   				text: 'Save',
	                listeners: {
                      	click: function() {
	                      		var newJobID = this.up('window').down('textfield[name=jobId]').getValue();
	                      		var newJob= this.up('window').down('textfield[name=title]').getValue();
	                      		var type = this.up('window').down('textfield[name=type]').getValue();
	                      		var category = this.up('window').down('textfield[name=category]').getValue();
	                      		var location = this.up('window').down('textfield[name=location]').getValue();
	                      		console.log(newJob);
                      			// var Job = new Jobs.model.Job({
	                      		// 	jobId: newJobID,
	                      		// 	title: newJob,
	                      		// 	type: type,
	                      		// 	category: category,
	                      		// 	location: location
	                      		// });
	                      		var tempJob = {
	                      			jobId: newJobID,
	                      			title: newJob,
	                      			type: type,
	                      			category: category,
	                      			location: location
	                      		};
	                      		thisInstance.getStore('Jobs').insert(0, tempJob);
	                      		Ext.Ajax.request({
	                      			url: '/jobs/add',
	                      			method: 'POST',          
	                      			jsonData:Ext.util.JSON.encode(tempJob),
	                      			//param:Ext.util.JSON.encode(tempJob),
	                      			headers:
	                      			{
	                      				'Content-Type': 'application/json'
	                      			},
	                      			success:function(response){
	                      				var obj = Ext.decode(response.responseText);
	                      				alert(obj);
	                      			},                                    
	                      			failure: function(){
	                      				alert("Failed");
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
