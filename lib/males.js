(function() {
  var fs, populate;

  fs = require('fs');

  populate = function(file) {
    var arr, content, l, lines, _fn, _i, _len;
    arr = [];
    content = fs.readFileSync(file, 'utf8');
    lines = content.split('\n');
    _fn = function(l) {
      var info;
      info = l.split('\t');
      if (info.length === 2) {
        return arr.push({
          name: info[0],
          cumfreq: info[1]
        });
      }
    };
    for (_i = 0, _len = lines.length; _i < _len; _i++) {
      l = lines[_i];
      _fn(l);
    }
    return arr;
  };

  module.exports = populate('./data/males.txt');

}).call(this);
