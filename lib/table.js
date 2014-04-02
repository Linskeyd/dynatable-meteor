Template.table.helpers({
	tehTable: function() {
		/*var myRecords = JSON.parse();

		$('#myTable').dynatable({
			dataset: {
				records: myRecords
			}
		});*/
	}

	heads: function() {
		return Rows.collection.find({isHeader: true});
	}
});