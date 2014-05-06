if(Meteor.isClient) {
	Template.meteorDynatable.helpers({
		heads: function() {
			return Rows.collection.find({isHeader: true});
		},
		tableRows: function () {
			return Rows.collection.find({isHeader: false});
		}
	});

	Template.tableRow.helpers({
		rowData: function() {
			var rowString;

			_.each(Rows.collection.find({isHeader: true}, {fields: {isHeader: 0}}), function(dataColumnContent) {
				rowString += '<td>' + dataColumnContent + '</td>';
			}, this);

			console.log(rowString);

			return rowString;
		}
	});

	Template.tableHead.rendered = function() {
		Meteor.defer(function() {
		  var myRecords = Rows.collection.find({isHeader: false}).fetch();//JSON.parse('[{"isHeader":false,"band":"Weezer","song":"El Scorcho"},{"isHeader":false,"band":"Chevelle","song":"Family System"}]');
		  
	      $('#myTable').dynatable({
	        dataset: {
	          records: myRecords
	        }
	      });
		});
	}
}