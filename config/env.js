const balm = require('balm');
const updateMDL = process.argv.includes('--mdl');
const useDefault = !updateMDL;
const buildDocs = process.argv.includes('--docs');
const useDocs = !balm.config.isProd || buildDocs;

module.exports = {
  updateMDL,
  useDefault,
  buildDocs,
  useDocs
};
