import UiTabs from './tabs/tabs';
import UiTabBar from './tabs/tab-bar';
import UiTab from './tabs/tab';
import UiPanel from './tabs/panel';

const components = {
  UiTabs,
  UiTabBar,
  UiTab,
  UiPanel
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
