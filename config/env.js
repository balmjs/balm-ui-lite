var balm = require('balm');
var updateMDL = process.argv.includes('--mdl');
var useDefault = !updateMDL;
var buildDocs = process.argv.includes('--docs');
var useDocs = !balm.config.production || buildDocs;

module.exports = {
  updateMDL,
  useDefault,
  buildDocs,
  useDocs
};
