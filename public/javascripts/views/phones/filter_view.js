PhonesFilterView = Backbone.View.extend({
  events: {
    'keydown input.query': 'setQuery',
  },
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(JST['phones/filter']());
  },
  setQuery: function (event) {
    window.setTimeout($.proxy(function() {
      this.model.set('query', event.target.value.replace(/^\s+|\s+$/g, ''));
    }, this), 0);
  },
});
