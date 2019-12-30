<template>
  <div class="page--table">
    <div class="component-title">
      <h2>Table 表格</h2>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 默认表格</h4>

    <ui-table
      :data="table.data"
      :thead="table.thead"
      :tbody="table.tbody"
      :action="table.action"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete"
    >
    </ui-table>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <h4>2. 选项框表格</h4>

    <ui-table
      :data="table.data"
      :thead="table2.thead"
      :tbody="table2.tbody"
      :action="table2.action"
      selectable="left"
      v-model="table.checkedList"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete"
    >
    </ui-table>
    <p>选中索引: {{ table.checkedList }}</p>
    <ui-accordion>
      <ui-markdown :code="code[2]"></ui-markdown>
    </ui-accordion>

    <h4>3. 带统计表尾的表格</h4>

    <ui-table
      :data="table.data"
      :thead="table2.thead"
      :tbody="table2.tbody"
      :tfoot="table2.tfoot"
      :action="table2.action"
      selectable="right"
      v-model="table2.checkedList"
      selectKeyField
      keyField="name"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete"
    >
    </ui-table>
    <p>选中姓名: {{ table2.checkedList }}</p>
    <ui-accordion>
      <ui-markdown :code="code[3]"></ui-markdown>
    </ui-accordion>

    <h4>4. 表格扩展</h4>

    <ui-table
      :data="table.data"
      :thead="table.thead"
      :tbody="table.tbody"
      :action="table.action"
      hasDetailView
      @view-detail="balmUI.onChange('table.currentData', $event)"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete"
    >
      {{ table.currentData }}
    </ui-table>
    <ui-accordion>
      <ui-markdown :code="code[4]"></ui-markdown>
    </ui-accordion>

    <h4>5. 自定义表格</h4>
    <ui-table :thead="true">
      <template slot="thead">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </template>
      <template slot="tbody">
        <tr v-for="(item, index) in table.data" :key="index">
          <td>{{ item.id }}</td>
          <td>
            <a :href="`/#/components/table/${item.id}`">{{ item.name }}</a>
          </td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </template>
    </ui-table>
    <ui-accordion>
      <ui-markdown :code="code[5]"></ui-markdown>
    </ui-accordion>

    <ui-apidoc name="table"></ui-apidoc>
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import docs from '@/docs/components/table.md';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-table>'
  },
  data() {
    return {
      docs,
      table: {
        currentData: {},
        data: [],
        thead: ['ID', 'Name', 'Quantity', 'Price', 'Operate'],
        tbody: ['id', 'name', 'quantity', 'price'],
        action: [
          {
            type: 'link',
            name: 'view',
            value: 'View'
          },
          {
            type: 'icon',
            name: 'edit',
            icon: 'edit'
          },
          {
            type: 'button',
            name: 'delete',
            value: 'Delete'
          }
        ],
        checkedList: []
      },
      table2: {
        thead: [
          'ID',
          {
            value: 'Name',
            align: 'center'
          },
          'Quantity',
          'Price',
          {
            value: 'Operate',
            align: 'center'
          }
        ],
        tbody: [
          'id',
          {
            field: 'name',
            align: 'center',
            url(data) {
              return `/#/components/table/${data.id}`;
            }
          },
          {
            field: 'quantity',
            class(data) {
              return data.quantity > 20 ? 'green' : 'red';
            }
          },
          {
            field: 'price',
            raw: true,
            fn(data) {
              let price = data.price.toFixed(2);
              return `<b style="color:gold">$</b>${price}`;
            }
          }
        ],
        tfoot: [
          null,
          null,
          {
            field: 'quantity',
            fnName: 'sum'
          },
          {
            field: 'price',
            fnName: 'avg',
            raw: true,
            fn(result) {
              let price = result.toFixed(3);
              return `<b style="color:gold">$</b>${price}`;
            }
          }
        ],
        action: [
          {
            type: 'link',
            name: 'view',
            value: 'View'
          },
          {
            type: 'icon',
            name: 'edit',
            value: '<i class="fa fa-edit"></i>'
          },
          {
            type: 'button',
            name: 'delete',
            value: 'Delete'
          }
        ],
        checkedList: []
      },
      table3: {
        thead: [
          {
            value: 'ID',
            sort: 'asc',
            by: 'id'
          },
          'Name',
          'Quantity',
          'Price',
          'Operate'
        ]
      }
    };
  },
  methods: {
    onView(data) {
      console.log('view', data);
    },
    onEdit(data) {
      console.log('edit', data);
    },
    onDelete(data) {
      console.log('delete', data);
    }
  },
  created() {
    this.showCode('table', 5);
  },
  async mounted() {
    let response = await this.$http.get(`${this.$domain}/data/table.json`);
    let dataList = response.data;
    this.table.data = dataList;
  }
};
</script>
