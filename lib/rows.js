Rows = {
	// Local client collection
	collection: new Meteor.collection(null),

	addRow: function(JSONData) {
		Rows.collection.insert(JSONData);
	},
	initializeTableHeaders: function(headers) {
		if(isArray(headers) && headers.length != 0) {
			var heads;

			for(var i=0; i<headers.length; i++) {
				Rows.collection.insert({
					isHeader: true,
					headName: headers[i]
				});
			}

			//Rows.collection.insert(_.extend(heads, {head: true});
		}
	}
}