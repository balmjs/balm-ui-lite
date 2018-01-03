//test-env
require('jsdom-global')()
global.expect = require('expect');

//test dir 
let glob = require('glob');
let components = glob.sync('test/components/*.spec.js');

module.exports = {
	components:components
}

//google ui need this env param
//confirm it's singleton
global._componentHandler = {};
Object.defineProperty(window, "componentHandler", {
	get(){
		return global._componentHandler;
	},
	set(e){
		global._componentHandler = e;
		global.componentHandler = e;
	}
});
