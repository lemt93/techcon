import Ember from 'ember';

export default Ember.Component.extend({
  ember: false,
  react: true,
  angular: true,

  cool: Ember.computed.and('react', 'angular'),
  awesome: Ember.computed.and('cool', 'ember'),
  someValue: Ember.computed('awesome', function () {
    return this.get('awesome') ? 'Awesome!' : 'Cool.';
  })
});
