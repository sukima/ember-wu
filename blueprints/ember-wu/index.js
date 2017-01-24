/*jshint node:true*/
module.exports = {
  description: 'ember-wu',

  normalizeEntityName: function () {},

  afterInstall: function afterInstall(/* options */) {
    return this.addBowerPackageToProject('wu');
  }
};
