import UiFile from './form/file';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiFile.name, UiFile);
}

export default UiFile;
