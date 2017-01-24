(function() {
  /* globals define, wu */

  function generateModule(name, values) {
    define(name, [], function () {
      'use strict';
      return values;
    });
  }

  generateModule('ember-wu', {'default': wu});
})();
