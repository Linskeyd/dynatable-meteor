Package.describe({
	summary: "A funner, semantic, HTML5+JSON, interactive table plugin."
});

Package.on_use(function(api, where) {
	api.use('client');

	api.add_files(['jquery.dynatable.css', 'jquery.dynatable.js'], 'client');

	if(api.export)
		api.export('dynatable');
});