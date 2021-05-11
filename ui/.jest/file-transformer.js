const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    const extname = path.extname(filename).toLowerCase();
    let moduleValue = path.basename(filename);
    switch (extname) {
      case '.svg': {
        moduleValue = 'svg';
        break;
      }
    }
    return 'module.exports = ' + JSON.stringify(moduleValue) + ';';
  },
};
