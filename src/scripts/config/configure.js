import merge from 'deepmerge';
import getType from '../helpers/typeof';

const configure = (Component, props) => {
  Object.keys(props).forEach(propName => {
    if (Component.props[propName] === undefined) {
      return;
    }

    let defaultValue = Component.props[propName].default;

    if (getType(defaultValue) === 'object') {
      Component.props[propName].default = merge(defaultValue, props[propName]);
      return;
    } else {
      console.warn(`The ${propName} prop cannot be overwritten.`);
    }

    Component.props[propName].default = props[propName];
  });
};

export default configure;
