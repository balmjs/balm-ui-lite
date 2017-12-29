import merge from 'deepmerge';
import getType from './helpers/typeof';

const configure = (Component, props) => {
  Object.keys(props).forEach(propName => {
    if (Component.props[propName] === undefined) {
      return;
    }

    let defaultValue = Component.props[propName].default;

    if (getType(defaultValue) === 'object') {
      Component.props[propName].default = merge(defaultValue, props[propName]);
      return;
    }

    Component.props[propName].default = props[propName];
  });
};

const multiConfigure = (components, options) => {
  Object.keys(options).forEach(key => {
    if (components[key] === undefined) {
      return;
    }

    const Component = components[key];
    const props = options[key];

    configure(Component, props);
  });
};

export default configure;
export {
  multiConfigure
};
