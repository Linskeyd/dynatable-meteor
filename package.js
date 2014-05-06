Package.describe({
	summary: "A funner, semantic, HTML5+JSON, interactive table plugin."
});

Package.on_use(function (api) {

	api.use('jquery', 'client');
	api.use('minimongo', 'client');
	api.use('mongo-livedata', 'client');
	api.use('templating', 'client');

	api.add_files(['lib/table.html', 'lib/table.js'], 'client');

	api.add_files('lib/rows.js');

	api.add_files(['jquery.dynatable.css', 'jquery.dynatable.js'], 'client');

	api.export('Rows');
});