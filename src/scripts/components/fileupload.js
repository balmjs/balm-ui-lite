import UiFileupload from './form/fileupload';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiFileupload.name, UiFileupload);
}

export default UiFileupload;
