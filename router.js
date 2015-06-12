Embera.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: ':post_id'}, function() {
    this.resource('new-answer');
  });
  this.resource('new-question');
  this.resource('recent-answers');
  this.resource('about');
});
