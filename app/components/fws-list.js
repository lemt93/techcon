import Ember from 'ember';

export default Ember.Component.extend({
  selectedFw: null,

  actions: {
    update() {
      const model = this.get('selectedFw');
      model.set('name',`${model.get('name')} - updated`);
      model.save();
    }
  }
});
