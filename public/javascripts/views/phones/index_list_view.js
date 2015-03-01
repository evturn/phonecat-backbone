PhonesIndexListView = Backbone.View.extend({
  initialize: function () {
    this.filtered_collection = new PhonesCollection();
    this.listenTo(this.filtered_collection, 'add', this.renderPhone);
    this.render();
    this.listenTo(this.model, 'change:query', this.render);
  },
  render: function () {
	  var filtered_phones = this.collection.query(this.model.get('query'));
    this.filtered_collection.set(filtered_phones);
  },
  renderPhone: function (phone) {
    var position = this.filtered_collection.indexOf(phone);
    this.phoneView = new PhonesIndexListPhoneView({
      tagName: 'li',
      model: phone
    });
    if (position === 0) {
      this.$el.prepend(this.phoneView.el);
    } else {
      $(this.$('li')[position - 1]).after(this.phoneView.el);
    }
  }
});