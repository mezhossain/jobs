Ext.define("Jobs.model.Job",{
	extend : "Ext.data.Model",
	requires :  [ 
                "Ext.data.proxy.Direct",
                "Ext.data.identifier.Negative",
                "Ext.data.validator.Length",
                "Ext.data.validator.Presence" 
              ],
	identifier : "negative",
	fields : [
	{
		name: "jobId",
		type: "number",
		validators:[{
			type:"length",
			min: 1,
			max: 255
		},{
			type: "presence"
		}]
	},{
		name : "title",
  	type : "string",
  	validators : [ {
    		type : "length",
    		min : 1,
    		max : 255
  	},{
    		type : "presence"
  	}]
  },{
  	name : "type",
  	type : "string",
    validators : [ {
      	type : "length",
      	min : 1,
      	max : 255
    },{
      	type : "presence"
    }]
  },{
  	name : "category",
  	type : "string",
    validators : [ {
      	type : "length",
      	min : 1,
      	max : 255
    },{
      	type : "presence"
    }]
  },{
  	name : "location",
  	type : "string",
    validators : [ {
      	type : "length",
      	min : 1,
      	max : 255
    },{
      	type : "presence"
    }]
  }],
});