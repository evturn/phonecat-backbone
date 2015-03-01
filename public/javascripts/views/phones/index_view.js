PhonesIndexView = Backbone.View.extend({
	initialize: function() {
		this.collection = new PhonesCollection([
			{'name': 'Nexus S',
				'snippet': 'Fast just got fast as shit.'},
			{'name': 'Motorola Plastic Thing with Wi-Fi',
			'snippet': 'Drop me. It should fine.'},
			{'name': 'Motorola Plastic Thing',
			'snippet': 'Drop me. It should fine.'}
		])

		this.render();

		new PhonesIndexViewListView({
			el: this.$('ul.phones'),
			collection: this.collection
		});
	},
	render: function() {
		this.$el.html(JST['phones/index']());
	},
});