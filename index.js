/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-wu',
  included: function included(app) {
    this._super.included(app);

    app.import({
      development: path.join(app.bowerDirectory, 'wu.js/lib/wu.js'),
      production: path.join(app.bowerDirectory, 'wu.js/dist/wu.min.js')
    });

    app.import('vendor/wu.js', {
      exports: {
        'ember-wu': ['default']
      }
    });
  }
};
