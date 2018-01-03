let initData  = require('./setup');

let components = initData.components;
components.forEach((component_path)=>{
	let component_test = require(`./components/${component_path.split('/').pop()}`);
	component_test();
});