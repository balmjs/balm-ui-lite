const balm = require('balm');
const updateMDL = process.argv.includes('--mdl');
const useDefaults = !updateMDL;
const buildDocs = process.argv.includes('--docs');
const useDocs = !balm.config.env.isProd || buildDocs;

module.exports = {
  updateMDL,
  useDefaults,
  buildDocs,
  useDocs
};
