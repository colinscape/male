(function() {
  var getMale, i, males, nFamilies, _base;

  males = require('./males');

  getMale = function() {
    var cf, current, index, r;
    r = Math.random() * males[males.length - 1].cumfreq;
    cf = 0;
    index = 0;
    while (cf < r) {
      current = males[index];
      cf = current.cumfreq;
      ++index;
    }
    return current.name;
  };

  module.exports = getMale;

  if (!(module.parent != null)) {
    nFamilies = (_base = process.argv)[2] || (_base[2] = 1);
    for (i = 1; 1 <= nFamilies ? i <= nFamilies : i >= nFamilies; 1 <= nFamilies ? i++ : i--) {
      console.log("" + (getMale()));
    }
  }

}).call(this);
