'use strict';

require.config({
    shim: {
      react: {
        exports: 'React'
      },
      JSXTransformer: {
        exports: 'JSXTransformer'
      }
    },
    paths: {
      react: '../bower_components/react/react',
      JSXTransformer: '../bower_components/react/JSXTransformer',
      text: '../bower_components/jsx-requirejs-plugin/js/text',
      jsx: '../bower_components/jsx-requirejs-plugin/js/jsx'
    },
    jsx: {
      fileExtension: '.jsx'
    }
});

require(['react',  'jsx!Stage'], function (React, Stage) {

});
