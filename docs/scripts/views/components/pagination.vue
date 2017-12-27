<template>
  <div class="page--pagination">
    <div class="component-title">
      <h2>Pagination 分页</h2>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 默认分页</h4>

    <div class="snippet-demo">
      <ui-pagination
        :record-count="list1.recordCount"
        :page-size="list1.pageSize"
        :page="list1.page"
        show-jumper
        @change="balmUI.onChange('list1.page', $event)">
      </ui-pagination>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <h4>2. 完整分页</h4>

    <div class="snippet-demo">
      <ui-pagination
        :record-count="list2.recordCount"
        :page-size="list2.pageSize"
        :page="list2.page"
        show-record
        show-jumper
        jumper-before="Goto"
        jumper-after="page"
        jumper-button="Go"
        @change="balmUI.onChange('list2.page', $event)">
        <template slot-scope="props">
          Showing {{ props.recordCount }} records,
          <ui-select
            :options="pageSizeList"
            optionValue="value"
            optionKey="key"
            :model="list2.pageSize"
            @change="balmUI.onChange('list2.pageSize', $event)">
            {{ props.pageSize }}
          </ui-select> records / page,
          {{ props.pageCount }} total pages
        </template>
      </ui-pagination>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[2]"></ui-markdown>
    </ui-accordion>

    <h4>3. 极简分页</h4>

    <div class="snippet-demo">
      <ui-pagination mini
        :record-count="list3.recordCount"
        :page-size="list3.pageSize"
        :page="list3.page"
        prev="Prev"
        next="Next"
        @change="balmUI.onChange('list3.page', $event)">
        <span>{{ list3.page }}</span>
      </ui-pagination>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[3]"></ui-markdown>
    </ui-accordion>

    <ui-apidoc name="pagination"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-pagination>'
  },
  data() {
    return {
      list1: {
        data: [],
        recordCount: 100,
        pageSize: 5,
        page: 1
      },
      list2: {
        data: [],
        recordCount: 100,
        pageSize: 5,
        page: 1
      },
      list3: {
        data: [],
        recordCount: 100,
        pageSize: 5,
        page: 1
      },
      pageSizeList: [{
        key: 5,
        value: 5
      }, {
        key: 10,
        value: 10
      }, {
        key: 15,
        value: 15
      }, {
        key: 20,
        value: 20
      }]
    };
  },
  created() {
    this.showCode('pagination', 3);
  }
};
</script>

<style>
.mdl-pagination--record .mdl-select {
  width: 64px;
  min-width: 64px;
}
</style>
