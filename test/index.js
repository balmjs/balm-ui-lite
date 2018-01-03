// require all test files (files that ends with .spec.js)
const helpersTestsContext = require.context('./helpers', true, /\.spec$/);
helpersTestsContext.keys().forEach(helpersTestsContext);

const componentsTestsContext = require.context('./components', true, /\.spec$/);
componentsTestsContext.keys().forEach(componentsTestsContext);
