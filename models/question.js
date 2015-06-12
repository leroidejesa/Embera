Embera.Question = DS.Model.extend({
  questionTitle: DS.attr(),
  description: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
