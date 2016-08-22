import Ember from 'ember';

export default Ember.Component.extend({
  ember: false,
  react: false,
  angular: true,

  cool: Ember.computed.and('react', 'angular'),
  awesome: Ember.computed.and('cool', 'ember')
});
