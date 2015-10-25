var SVG = require('svgo');
var svg = new SVG();
var toReact = require('./src/svg-to-react');

// svgo looks cool, but let's try without for now since it's async
/*
svg.optimize(content.toString(), function(res) {
callback(null, toReact(res.data));
});
*/

exports = toReact;
