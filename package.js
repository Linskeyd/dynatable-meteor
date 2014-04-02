Package.describe({
	summary: "A funner, semantic, HTML5+JSON, interactive table plugin."
});

Package.on_use(function(api) {

	api.use('jquery', 'client');

	api.add_files('lib/client/table.html')

	api.add_files(['jquery.dynatable.css', 'jquery.dynatable.js'], 'client');

	if(api.export)
		api.export('dynatable');
});