Embera.QuestionRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('question', params.question_id);
  }
});
