// require all test files (files that ends with .spec.js)
const helpersTestsContext = require.context('./helpers', true, /\.spec$/);
helpersTestsContext.keys().forEach(helpersTestsContext);

const componentsTestsContext = require.context('./components', true, /\.spec$/);
componentsTestsContext.keys().forEach(componentsTestsContext);

const pluginsTestsContext = require.context('./plugins', true, /\.spec$/);
pluginsTestsContext.keys().forEach(pluginsTestsContext);
