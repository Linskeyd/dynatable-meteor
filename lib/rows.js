Rows = {
	// Local client collection
	collection: new Meteor.Collection("Rows"),
	addRow: function(JSONData) {
		if(JSONData)
		  Rows.collection.insert(JSONData);
	},
	initializeTableHeaders: function(headers) {
		if(_.isArray(headers) && headers.length != 0) {
			for(var i=0; i<headers.length; i++) {
				Rows.collection.insert({
					isHeader: true,
					headName: headers[i]
				});
			}
			//Rows.collection.insert(_.extend(headers, {isHeader: true});
		}
	}
};