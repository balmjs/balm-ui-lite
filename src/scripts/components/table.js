import UiTable from './data/table';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiTable.name, UiTable);
}

export default UiTable;
