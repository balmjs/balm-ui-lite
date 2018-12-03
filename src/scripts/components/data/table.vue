<template>
  <table class="mdl-data-table mdl-js-data-table">
    <!-- an optional <caption> element -->
    <caption v-if="caption">
      <slot name="caption">{{ caption }}</slot>
    </caption>
    <!-- zero or more <colgroup> elements -->
    <colgroup v-if="colgroup">
      <slot name="colgroup">
        <col v-for="(colValue, colKey) in currentCol"
          :key="colKey"
          :class="`col-${colValue}`">
      </slot>
    </colgroup>
    <!-- an optional <thead> element -->
    <thead v-if="thead">
      <slot name="thead" :className="{asc: CLASSNAME_ASC, desc: CLASSNAME_DESC}">
        <tr v-for="(rowValue, rowKey) in theadData" :key="rowKey">
          <template v-for="(cell, index) in rowValue">
            <template v-if="cell.isCheckbox">
              <th
              :key="index"
              :class="['mdl-data-table__checkbox', cell.class]"
              :colspan="cell.col"
              :rowspan="cell.row">
                <ui-checkbox noRipple
                  :class="[CLASSNAME_SELECT, 'mdl-data-table__check-all']"
                  :value="cell.value"
                  :model="isCheckAll"
                  @change="onCheckAll"></ui-checkbox>
              </th>
            </template>
            <template v-else>
              <!-- Raw HTML -->
              <th v-if="cell.raw"
                :key="index"
                :class="[cell.class, getSortClass(cell.sort)]"
                :colspan="cell.col"
                :rowspan="cell.row"
                @click="onSort(cell)"
                v-html="cell.value"></th>
              <!-- Text -->
              <th v-else
                :key="index"
                :class="[cell.class, getSortClass(cell.sort)]"
                :colspan="cell.col"
                :rowspan="cell.row"
                @click="onSort(cell)">
                {{ cell.value }}
              </th>
            </template>
          </template>
        </tr>
      </slot>
    </thead>
    <!--
      either one of the following:
      * zero or more <tbody> elements
      * one or more <tr> elements
    -->
    <tbody>
      <slot name="tbody" :data="currentData">
        <!-- Has Data -->
        <template v-if="tbodyData.length">
          <tr v-for="(rowValue, rowKey) in tbodyData"
            :key="rowKey"
            :class="{
              'is-selected': isSelected(rowValue, rowKey),
              'mdl-data-table__detail-view': isDetailView(rowKey)
            }">
            <template v-for="(cell, index) in rowValue">
              <!-- Data View -->
              <template v-if="isCellData(rowKey, cell)">
                <!-- Raw HTML -->
                <td v-if="cell.raw"
                  :key="index"
                  :class="cell.class"
                  :colspan="cell.col"
                  :rowspan="cell.row"
                  v-html="cell.value"></td>
                <!-- Text -->
                <td v-else
                  :key="index"
                  :class="cell.class"
                  :colspan="cell.col"
                  :rowspan="cell.row">
                  <template v-if="cell.url">
                    <a :href="cell.url">{{ cell.value }}</a>
                  </template>
                  <template v-else>{{ cell.value }}</template>
                </td>
              </template>
              <!-- Others View -->
              <template v-else>
                <td
                  :key="index"
                  :class="[
                    {
                      'mdl-data-table__action': cell.isAction,
                      'mdl-data-table__checkbox': cell.isCheckbox,
                      'mdl-data-table__row-expand': cell.isPlus
                    },
                    cell.class
                  ]"
                  :colspan="cell.col"
                  :rowspan="cell.row">
                  <!-- Actions -->
                  <template v-if="cell.isAction">
                    <ui-button v-for="(actionValue, actionKey) in cell.actions"
                      :key="actionKey"
                      :icon="actionValue.icon || actionValue.isIcon"
                      :link="actionValue.isLink"
                      @click="doAction(actionValue)">
                      <span v-if="!actionValue.icon" v-html="actionValue.value"></span>
                    </ui-button>
                  </template>
                  <!-- Checkbox -->
                  <ui-checkbox v-if="cell.isCheckbox" noRipple
                    :class="[CLASSNAME_SELECT, 'mdl-data-table__check-one']"
                    :value="selectKeyField ? cell.value : getSelectIndex(rowKey)"
                    :model="currentCheckedList"
                    @change="onCheckOne"></ui-checkbox>
                  <!-- Detail View Control -->
                  <i v-if="cell.isPlus"
                    class="material-icons md-16"
                    @click="viewDetail(rowKey, cell)">{{ cell.show ? 'remove' : 'add' }}</i>
                  <!-- Detail View -->
                  <div v-if="isDetailView(rowKey)" class="detail-view">
                    <slot></slot>
                  </div>
                </td>
              </template>
            </template>
          </tr>
        </template>
        <!-- No Data -->
        <template v-else>
          <tr>
            <td class="mdl-data-table__cell--no-data" :colspan="currentCol">{{ noData }}</td>
          </tr>
        </template>
      </slot>
    </tbody>
    <!-- an optional <tfoot> element -->
    <tfoot v-if="tfoot">
      <slot name="tfoot" :data="tfootData">
        <tr>
          <template v-for="(cell, index) in tfootData">
            <td v-if="cell.raw"
              :key="index"
              :class="cell.class"
              :colspan="cell.col"
              :rowspan="cell.row"
              v-html="cell.value"></td>
            <td v-else
              :key="index"
              :class="cell.class"
              :colspan="cell.col"
              :rowspan="cell.row">
              {{ cell.value }}
            </td>
          </template>
        </tr>
      </slot>
    </tfoot>
  </table>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/data-table/data-table';
import { isString, isObject, isArray, isFunction } from '../../helpers/is';
import UiButton from '../common/button';
import UiCheckbox from '../form/checkbox';

const DEFAULTS = {
  detailViewIndex: -1
};
// Type
const T_HEAD = 'thead';
const T_BODY = 'tbody';
const T_FOOT = 'tfoot';
// Cell
const CELL_ACTION = 'actions';
const CELL_CLASS = 'class';
const CELL_COLSPAN = 'col';
const CELL_DATA = 'data';
const CELL_DETAIL_VIEW = 'detailView';
const CELL_FIELD = 'field';
const CELL_FUNCTION = 'fn';
const CELL_ICON = 'icon';
const CELL_INDEX = 'index';
const CELL_NAME = 'name';
const CELL_RAW = 'raw';
const CELL_ROWSPAN = 'row';
const CELL_SORT = 'sort';
const CELL_VALUE = 'value';
const CELL_URL = 'url';
// Action
const ACTION_BUTTON = 'button';
const ACTION_ICON = 'icon';
const ACTION_LINK = 'link';
// Aggregate functions
const AGGREGATE_COUNT = 'count';
const AGGREGATE_SUM = 'sum';
const AGGREGATE_AVG = 'avg';
const AGGREGATE_MIN = 'min';
const AGGREGATE_MAX = 'max';
// Checkbox positon
const CHECKBOX_POSITION_LEFT = 'left';
const CHECKBOX_POSITION_RIGHT = 'right';
// Sort
const SORT_ASC = 'asc';
const SORT_DESC = 'desc';
const SORT_BY = 'by';
// Class name
const CLASSNAME_SELECT = 'mdl-data-table__select';
const CLASSNAME_ASC = 'mdl-data-table__header--sorted-ascending';
const CLASSNAME_DESC = 'mdl-data-table__header--sorted-descending';
const CLASSNAME_NON_NUMERIC = 'mdl-data-table__cell--non-numeric';
const CLASSNAME_TEXT_LEFT = 'mdl-data-table__cell--text-left';
const CLASSNAME_TEXT_CENTER = 'mdl-data-table__cell--text-center';
const CLASSNAME_TEXT_RIGHT = 'mdl-data-table__cell--text-right';
// Event
const EVENT_SELECTED = 'selected';
const EVENT_VIEW_DETAIL = 'view-detail';

export default {
  name: 'ui-table',
  mixins: [mdlMixin],
  components: {
    UiButton,
    UiCheckbox
  },
  model: {
    prop: 'checkedList',
    event: EVENT_SELECTED
  },
  props: {
    // state
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    checkedList: {
      type: Array,
      default() {
        return [];
      }
    },
    // structure attributes
    caption: {
      type: [String, Boolean],
      default: false
    },
    colgroup: {
      type: Boolean,
      default: false
    },
    thead: {
      type: [Array, Boolean],
      default: false
    },
    tbody: {
      type: Array,
      default() {
        return [];
      }
    },
    tfoot: {
      type: [Array, Boolean],
      default: false
    },
    // ui attributes
    action: {
      type: Array,
      default() {
        return [];
      }
    },
    selectable: {
      type: [String, Boolean],
      default: false
    },
    selectKeyField: {
      type: Boolean,
      default: false
    },
    keyField: {
      type: String,
      default: 'id'
    },
    noData: {
      type: String,
      default: 'No Data'
    },
    hasDetailView: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      CLASSNAME_SELECT,
      CLASSNAME_ASC,
      CLASSNAME_DESC,
      currentData: this.data,
      currentThead: this.thead,
      currentActions: this.action,
      currentCheckedList: this.checkedList,
      isCheckAll: false,
      currentDetailViewIndex: DEFAULTS.detailViewIndex
    };
  },
  computed: {
    className() {
      return {
        'mdl-data-table': true,
        'mdl-js-data-table': true,
        'mdl-data-table--selectable': this.selectable
      };
    },
    currentCol() {
      let result = this.tbody.length;

      if (this.currentActions.length) {
        result += 1;
      }

      if (this.selectable) {
        result += 1;
      }

      if (this.hasDetailView) {
        result += 1;
      }

      return result;
    },
    theadData() {
      return this.getData({
        type: T_HEAD,
        data: this.currentThead
      });
    },
    tbodyData() {
      return this.getData({
        type: T_BODY,
        data: this.tbody
      });
    },
    tfootData() {
      return this.tfoot.length && this.currentData.length
        ? this.getData({
            type: T_FOOT,
            data: this.tfoot
          })
        : [];
    },
    currentDataCount() {
      return this.currentDetailViewIndex === DEFAULTS.detailViewIndex
        ? this.currentData.length
        : this.currentData.length - 1;
    }
  },
  watch: {
    data(val) {
      this.currentData = val;
    },
    checkboxList(val) {
      this.currentCheckedList = val;
    },
    thead(val) {
      this.currentThead = val; // Just for sort
    }
  },
  created() {
    this._checkAll();
  },
  mounted() {
    this.$mdl.upgradeElement(this.$el, 'MaterialDataTable');
  },
  methods: {
    getCell(type, data, index = -1) {
      let cell = {};
      let fn;

      if (isString(data)) {
        cell[CELL_VALUE] = data;
      } else if (isObject(data)) {
        // class attribute
        let className = [];
        // text-align
        if (data.noNum) {
          className.push(CLASSNAME_NON_NUMERIC);
        } else if (data.align) {
          switch (data.align.toLowerCase()) {
            case 'left':
              className.push(CLASSNAME_TEXT_LEFT);
              break;
            case 'center':
              className.push(CLASSNAME_TEXT_CENTER);
              break;
            case 'right':
              className.push(CLASSNAME_TEXT_RIGHT);
              break;
          }
        }

        // custom class
        let _className = data[CELL_CLASS];
        if (_className) {
          if (type === T_HEAD && isString(_className)) {
            className.push(_className);
          } else {
            if (isFunction(_className)) {
              let currentCellData = Object.assign({}, this.currentData[index]);
              _className = _className(currentCellData);
            }
            className.push(_className);
          }
        }

        // class attribute
        if (className.length) {
          cell[CELL_CLASS] = className.join(' ');
        }

        // colspan and rowspan attribute
        if (data[CELL_COLSPAN]) {
          cell[CELL_COLSPAN] = data[CELL_COLSPAN];
        }
        if (data[CELL_ROWSPAN]) {
          cell[CELL_ROWSPAN] = data[CELL_ROWSPAN];
        }

        switch (type) {
          case T_HEAD:
            // index: value
            cell[CELL_INDEX] = data[CELL_INDEX];
            cell[CELL_VALUE] = data[CELL_VALUE];
            // sort by
            if (data[CELL_SORT] && data[SORT_BY]) {
              cell[CELL_SORT] = data[CELL_SORT];
              cell[SORT_BY] = data[SORT_BY];
            }
            break;
          case T_FOOT:
            let result = 0;
            if (data[CELL_DATA].length) {
              // let cellData = data[CELL_DATA];
              switch (data.fnName.toLowerCase()) {
                case AGGREGATE_COUNT:
                  result = data[CELL_DATA].length;
                  if (this.currentDetailIndex > DEFAULTS.detailViewIndex) {
                    result += 1;
                  }
                  break;
                case AGGREGATE_SUM:
                  data[CELL_DATA].forEach(value => {
                    if (value) {
                      result += value;
                    }
                  });
                  break;
                case AGGREGATE_AVG:
                  data[CELL_DATA].forEach(value => {
                    if (value) {
                      result += value;
                    }
                  });
                  result /= data[CELL_DATA].length;
                  break;
                case AGGREGATE_MAX:
                  data[CELL_DATA].forEach(value => {
                    if (value && value > result) {
                      result = value;
                    }
                  });
                  break;
                case AGGREGATE_MIN:
                  data[CELL_DATA].forEach(value => {
                    if (value) {
                      if (value < result) {
                        result = value;
                      } else if (result === 0) {
                        result = value;
                      }
                    }
                  });
                  break;
                default:
                  result = '';
                  break;
              }
            }
            fn = data[CELL_FUNCTION];
            cell[CELL_VALUE] = fn ? fn(result) : Math.round(result * 100) / 100;
            break;
          default:
            // T_BODY
            let currentCellData = Object.assign({}, this.currentData[index]);
            let _url = data[CELL_URL];
            fn = data[CELL_FUNCTION];

            cell[CELL_VALUE] = fn
              ? fn(currentCellData, index)
              : data[CELL_VALUE];
            cell[CELL_URL] = isFunction(_url)
              ? _url(currentCellData, index)
              : false;
            break;
        }

        // dangerously set innerHTML
        cell[CELL_RAW] = data[CELL_RAW];
      } else {
        console.warn('Invalid cell data!');
        cell[CELL_VALUE] = '';
      }

      return cell;
    },
    getAction(result, data) {
      let cell = {
        isAction: true
      };
      let currentActions = [];
      let actions = this.currentActions;

      if (actions.length) {
        for (let action of actions) {
          let cellData = {};
          let currentCellData = Object.assign({}, data);

          cellData[CELL_NAME] = action.name;
          cellData[CELL_VALUE] = action[CELL_VALUE];
          cellData[CELL_DATA] = currentCellData;

          switch (action.type.toLowerCase()) {
            case ACTION_LINK:
              cellData.isLink = true;
              let _url = action[CELL_URL];
              cellData[CELL_URL] = isFunction(_url)
                ? _url(currentCellData)
                : false;
              break;
            case ACTION_ICON:
              cellData.isIcon = true;
              cellData[CELL_ICON] = action[CELL_ICON];
              break;
            default:
              cellData.isButton = true;
              break;
          }

          currentActions.push(cellData);
        }

        cell[CELL_ACTION] = currentActions.length ? currentActions : [];

        result.push(cell);
      }

      return result;
    },
    getCheckbox(type, result, value = 1) {
      if (this.selectable) {
        let cell = {};
        let isCheckbox = !!this.currentData.length;

        switch (type) {
          case T_HEAD:
            cell = {
              isCheckbox
            };
            if (value > 1) {
              cell[CELL_ROWSPAN] = value; // row number
            }
            break;
          case T_BODY:
            cell = {
              isCheckbox,
              value // data[this.keyField]
            };
            break;
        }

        if (this.selectable === CHECKBOX_POSITION_RIGHT) {
          result.push(cell);
        } else if (
          this.selectable === CHECKBOX_POSITION_LEFT ||
          this.selectable
        ) {
          result.unshift(cell);
        }
      }

      return result;
    },
    getDetailView(type, result, key = DEFAULTS.detailViewIndex, value = '') {
      if (this.hasDetailView) {
        let cell = {};

        switch (type) {
          case T_HEAD:
            if (key > 1) {
              cell[CELL_ROWSPAN] = key; // row number
            }
            break;
          case T_BODY:
            cell = {
              isPlus: true,
              show: +key === this.currentDetailViewIndex
            };
            if (value) {
              cell[CELL_DATA] = value;
            }
            break;
        }

        result.unshift(cell);
      }

      return result;
    },
    getData(object) {
      let result = [];
      let { type, data } = object;

      if (isArray(data)) {
        let cell;

        switch (type) {
          case T_HEAD:
            result[0] = []; // single line init
            for (let index in data) {
              let row = data[index];
              if (isArray(row)) {
                // multi line
                result[index] = [];
                for (let key in row) {
                  let value = row[key];
                  cell = {};
                  if (isObject(value)) {
                    cell = value;
                  } else {
                    cell[CELL_VALUE] = value;
                  }
                  cell[CELL_INDEX] = `${index},${key}`; // array index separation
                  result[index].push(this.getCell(type, cell));
                }
              } else {
                // single line
                let value = row;
                cell = {};
                if (isObject(value)) {
                  cell = value;
                } else {
                  cell[CELL_VALUE] = value;
                }
                cell[CELL_INDEX] = index;
                result[0].push(this.getCell(type, cell));
              }
            }

            let rowspan = isArray(data[0]) ? data.length : 1;
            // append checkbox
            result[0] = this.getCheckbox(type, result[0], rowspan);
            // append detail view
            result[0] = this.getDetailView(type, result[0], rowspan);
            break;
          case T_BODY:
            for (let key in this.currentData) {
              let value = this.currentData[key];
              result[key] = [];
              if (value[CELL_DETAIL_VIEW]) {
                result[key].push(
                  this.getCell(type, {
                    col: this.currentCol
                  })
                );
              } else {
                // fill cell
                for (let item of data) {
                  cell = {};
                  if (isObject(item)) {
                    cell = item;
                    cell[CELL_VALUE] = value[item[CELL_FIELD]]; // use `field` !important
                  } else {
                    cell[CELL_VALUE] = value[item];
                  }
                  result[key].push(this.getCell(type, cell, key));
                }
                // append action
                result[key] = this.getAction(result[key], value);
                // append checkbox
                result[key] = this.getCheckbox(
                  type,
                  result[key],
                  value[this.keyField]
                );
                // append detail view
                result[key] = this.getDetailView(type, result[key], key, value);
              }
            }
            break;
          case T_FOOT:
            for (let item of data) {
              if (item) {
                cell = item;
                let field = item && item[CELL_FIELD] ? item[CELL_FIELD] : false;
                if (field) {
                  cell[CELL_DATA] = item
                    ? this.currentData.map(value => value[field])
                    : '';
                }
                result.push(this.getCell(type, cell));
              } else {
                result.push({});
              }
            }
            // append empty action & checkbox & detail view
            if (this.currentActions.length) {
              result.push({});
            }
            result = this.getCheckbox(type, result);
            result = this.getDetailView(type, result);
            break;
        }
      } else {
        if (type === T_BODY) {
          console.error(`${type} must be an array!`);
        }
      }

      return result;
    },
    doAction({ url, name, data }) {
      if (url) {
        window.location.href = url;
      } else {
        this.$emit(name, data);
      }
    },
    _getCheckedIds() {
      return this.currentData
        .filter(value => !value[CELL_DETAIL_VIEW])
        .map(
          (value, index) => (this.selectKeyField ? value[this.keyField] : index)
        );
    },
    _onChecked() {
      let beEqual = this.currentCheckedList.length === this.currentDataCount;
      let lastCheckedList = beEqual ? [] : this.currentCheckedList;

      this.currentCheckedList = this.isCheckAll
        ? this._getCheckedIds()
        : lastCheckedList;

      this.$emit(EVENT_SELECTED, Object.assign([], this.currentCheckedList)); // result: array
    },
    _checkAll() {
      let notEmpty = this.currentDataCount;
      let beEqual = this.currentCheckedList.length === this.currentDataCount;
      let ids = this._getCheckedIds();
      let isExist = this.currentCheckedList.every(id => ids.indexOf(id) > -1);

      this.isCheckAll = notEmpty && beEqual && isExist;
      this._onChecked();
    },
    onCheckOne(data) {
      this.currentCheckedList = data;
      this._checkAll();
    },
    onCheckAll(checked) {
      this.isCheckAll = checked;
      this._onChecked();
    },
    getSortClass(sort) {
      let className = '';
      if (sort === SORT_ASC) {
        className = CLASSNAME_ASC;
      } else if (sort === SORT_DESC) {
        className = CLASSNAME_DESC;
      }
      return className;
    },
    isSelected(rowData, index) {
      let cell = rowData.find(cell => cell.isCheckbox);

      let result;
      if (this.selectKeyField) {
        result = cell
          ? this.currentCheckedList.indexOf(cell[CELL_VALUE]) > -1
          : false;
      } else {
        if (this.currentDetailViewIndex === DEFAULTS.detailViewIndex) {
          result = this.currentCheckedList.indexOf(index) > -1;
        } else {
          let _index = index > this.currentDetailViewIndex ? index - 1 : index;
          result = this.currentCheckedList.indexOf(_index) > -1;
        }
      }

      return cell ? result : false;
    },
    resetData(index) {
      this.currentData.splice(index + 1, 1);
      this.currentDetailViewIndex = DEFAULTS.detailViewIndex;
    },
    onSort(data) {
      if (this.currentDetailViewIndex !== DEFAULTS.detailViewIndex) {
        let currentIndex = this.currentData.findIndex(
          (value, index) => index === this.currentDetailViewIndex
        );
        this.resetData(currentIndex);
      }

      if (data[CELL_SORT]) {
        let sortBy = data.by;
        let currentSort;

        // TODO 多个表格共用数据bug
        if (data[CELL_SORT] === SORT_ASC) {
          currentSort = SORT_DESC;
          this.currentData.sort((a, b) => {
            return b[sortBy] - a[sortBy];
          });
        } else if (data[CELL_SORT] === SORT_DESC) {
          currentSort = SORT_ASC;
          this.currentData.sort((a, b) => {
            return a[sortBy] - b[sortBy];
          });
        }

        if (data[CELL_INDEX].indexOf(',') === -1) {
          this.currentThead[data[CELL_INDEX]][CELL_SORT] = currentSort;
        } else {
          let index = data[CELL_INDEX].split(',');
          this.currentThead[index[0]][index[1]][CELL_SORT] = currentSort;
        }
      }

      if (!this.selectKeyField) {
        this.currentCheckedList = [];
        this.$emit(EVENT_SELECTED, []); // result: array
      }
    },
    viewDetail(currentIndex, cell) {
      if (cell.show) {
        this.resetData(currentIndex);
      } else {
        let result = [];

        if (this.currentDetailViewIndex === DEFAULTS.detailViewIndex) {
          this.currentData.forEach((value, index) => {
            if (index === currentIndex) {
              result.push(value);
              result.push({
                detailView: true
              });
            } else {
              result.push(value);
            }
          });
        } else {
          this.currentData.splice(this.currentDetailViewIndex + 1, 1);

          if (currentIndex > this.currentDetailViewIndex) {
            currentIndex = currentIndex - 1;
          }

          this.currentData.forEach((value, index) => {
            if (index === currentIndex) {
              result.push(value);
              result.push({
                detailView: true
              });
            } else {
              result.push(value);
            }
          });
        }

        this.currentData = result;
        this.currentDetailViewIndex = currentIndex;

        this.$emit(EVENT_VIEW_DETAIL, Object.assign({}, cell[CELL_DATA])); // result: any
      }
    },
    isCellData(currentIndex, cell) {
      return !(
        cell.isAction ||
        cell.isCheckbox ||
        cell.isPlus ||
        this.isDetailView(currentIndex)
      );
    },
    isDetailView(index) {
      let hasDetailViewRow = this.currentDetailViewIndex + 1 > 0;
      let isDetailViewRow = index === this.currentDetailViewIndex + 1;
      return hasDetailViewRow && isDetailViewRow;
    },
    getSelectIndex(currentIndex) {
      let result = currentIndex;

      if (
        this.currentDetailViewIndex > DEFAULTS.detailViewIndex &&
        currentIndex > this.currentDetailViewIndex
      ) {
        result -= 1;
      }

      return result;
    }
  }
};
</script>
