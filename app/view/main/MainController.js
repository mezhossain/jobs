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
					 var deleteJob = {
						jobId: selectedJob.data.jobId,
						title: selectedJob.data.title,
						type: selectedJob.data.type,
						category: selectedJob.data.category,
						location: selectedJob.data.location
					 };
					 console.log(deleteJob);
					 this.getStore('Jobs').load();
					 Ext.Ajax.request({
						url: '/jobs/delete',
						method: 'DELETE',
						headers: { 'Content-Type': 'application/json' }, 
						jsonData:  Ext.util.JSON.encode(deleteJob),
		        		success: function (response) {
		            		var json = Ext.decode(response.responseText);
			            },	        	
			        	failure: function () {
			            	Ext.Msg.alert('Error', "Job was not deleted");
			        	},
    				});
			 	}
			});
 		}
 	},
 	onDoubleClick:function(dataview, record, item, index, e) {
 		var thisInstance = this;
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
				value: record.data['jobId'],
				disabled: true
			},{
				xtype : 'textfield',
				fieldLabel: 'Job Title',
				name:'title',
				value: record.data['title']
			},{
				xtype: 'combo',
				fieldLabel: 'Type',
				name: 'type',
				queryMode: 'local',
				valueField: 'typeAbbr',
				displayField: 'typeName',
				store: {
					fields: [ 'typeAbbr','typeName' ],
					data: [{
							typeAbbr: 'P',
							typeName: 'Permanent'
						}, {
							typeAbbr: 'T',
							typeName: 'Temporary'
						}, {
							typeAbbr: 'I',
							typeName: 'Internship'
						}]
				},
				value: record.data['type']
			},{
				xtype : 'textfield',
				fieldLabel: 'Category',
				name:'category',
				value: record.data['category']
			},{
				xtype : 'textfield',
				fieldLabel: 'Location',
				name: 'location',
				value: record.data['location']
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
					handler: function() {
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
                      		var type = this.up('window').down('textfield[name=type]').getDisplayValue();
                      		var category = this.up('window').down('textfield[name=category]').getValue();
                      		var location = this.up('window').down('textfield[name=location]').getValue();
                      		var updatedJob = {
								jobId: newJobID,
								title: newJob,
								type: type,
								category: category,
								location: location
							};
                      		// thisInstance.getStore('Jobs').setFields(newJob,type,category,location);
							thisInstance.getStore('Jobs').load;
    						Ext.Ajax.request({
						      	url: '/jobs/update',
						      	method: 'PUT',          
						      	jsonData: Ext.util.JSON.encode(updatedJob),
						      	headers:
						      	{
						      		'Content-Type': 'application/json'
						      	},
						      	success:function(response){
						      		var obj = Ext.decode(response.responseText);
						      		console.log(obj);
						      	},                                    
						      	failure: function(){
						      		console.log("Failed");
						      	}
							})
							updateForm.close();
							window.location.href=window.location.href;
							
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
	   			fieldLabel: 'Job Title',
	   			name:'title'
			},{
				xtype: 'combo',
				fieldLabel: 'Type',
				name: 'type',
				queryMode: 'local',
				valueField: 'typeAbbr',
				displayField: 'typeName',
				store: {
					fields: [ 'typeAbbr','typeName' ],
					data: [{
						typeAbbr: 'P',
						typeName: 'Permanent'
					}, {
						typeAbbr: 'T',
						typeName: 'Temporary'
					}, {
						typeAbbr: 'I',
						typeName: 'Internship'
					}]
				},
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
								  //var newJobID = this.up('window').down('textfield[name=jobId]').getValue();
								var newJobID = Math.floor(Math.random() * 1000);
	                      		var newJob= this.up('window').down('textfield[name=title]').getValue();
	                      		var type = this.up('window').down('combo[name=type]').getDisplayValue();
	                      		var category = this.up('window').down('textfield[name=category]').getValue();
	                      		var location = this.up('window').down('textfield[name=location]').getValue();
	                      		console.log(newJob);
	                      		var tempJob = {
									jobId: newJobID,
	                      			title: newJob,
	                      			type: type,
	                      			category: category,
	                      			location: location
	                      		};
	                      		thisInstance.getStore('Jobs').insert(newJobID, tempJob);
	                      		Ext.Ajax.request({
	                      			url: '/jobs/add',
	                      			method: 'POST',          
	                      			jsonData: Ext.util.JSON.encode(tempJob),
	                      			headers:
	                      			{
	                      				'Content-Type': 'application/json'
	                      			},
	                      			success:function(response){
	                      				var obj = Ext.decode(response.responseText);
	                      				this.getStore('Jobs').load();
	                      			},                                    
	                      			failure: function(){
										Ext.Msg.alert('Error', "Job was not added");
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
