import { createLocalVue } from 'vue-test-utils';
import $event from '../../plugins/event';

import scene1 from './test.vue';
import scene2 from './test.js';

let localVue = createLocalVue();

let createdScene = (obj) => {
  return Object.assign({}, {
    template: `<div>
                <input type="text" :value="formData.name" @change="balmUI.onChange('formData.name', $event.target.value, callback)">
              </div>`,
    data () {
      return {
        formData: {
          name: '',
          show: false
        }
      };
    },
    methods: {
      callback () {}
    }
  }, obj);
};

/*let createTester = () => createdScene({
  template: `<div>1<tester
                      @close="balmUI.onClose('formData.show', callback)"
                      @show="balmUI.onShow('formData.show', callback)"></tester></div>`,
  components: {
    tester: {
      template: `<div class="tester">
                    <span class="close-btn" @click="$emit('close')">1</span>
                    <span class="show-btn" @click="$emit('show')">2</span>
                   </div>`
    }
  }
});*/

let createTester = () => createdScene({
  template: `<div>1<tester 
                      @close="balmUI.onClose('formData.show', callback)" 
                      @show="balmUI.onShow('formData.show', callback)"></tester></div>`,
  components: {
    tester: {
      template: `<div class="tester">
                    <span class="close-btn" @click="$emit('close')">1</span>
                    <span class="show-btn" @click="$emit('show')">2</span>
                   </div>`
    }
  }
});

localVue.use($event);

describe('$event', () => {
  it('balmUI.onChange: input的值改变时自动更新vm数据', () => {
    let wrapper = mount(createdScene(), {
      localVue
    });

    let input = wrapper.find('input');

    input.element.value = 'newName';

    input.trigger('change');

    expect(wrapper.vm.formData.name).to.equal('newName');
  });

  it('balmUI.onChange: input的值改变时自动更新vm数据，并执行一次方法', () => {
    let callback = sinon.spy();

    let wrapper = mount(createdScene(), {
      localVue,
      methods: { callback }
    });

    let input = wrapper.find('input');

    input.element.value = 'newName';

    input.trigger('change');

    expect(wrapper.vm.formData.name).to.equal('newName');

    sinon.assert.calledOnce(callback);
  });

  /*it('a', () => {
    let wrapper1 = mount(scene1);
    let wrapper2 = mount({
      template: `<div>1<tester></tester></div>`,
      components: {
        tester: {
          template: '<span>2</span>'
        }
      }
    });
    console.log(wrapper2.html());
    // expect(wrapper1).to.deep.equal(wrapper2);
  });*/

  /** TODO: waiting [mount] for child component render bug fixed
   * https://github.com/vuejs/vue-test-utils/issues/329
   **/

  /*it('balmUI.onShow: 自动更新指定属性状态为true，并执行一次方法', () => {

    let callback = sinon.spy();

    let wrapper = mount(scene, {
      localVue
    });

    console.log(wrapper.is(scene));
    console.log(wrapper.vm.$el);

    let btn = wrapper.find('.show-btn');

    btn.trigger('click');

    expect(wrapper.vm.formData.show).to.equal(true);

    sinon.assert.calledOnce(callback);
  });*/

  /*it('balmUI.onClose: 自动更新指定属性状态为false，并执行一次方法', () => {

    let callback = sinon.spy();

    let wrapper = mount(createTester(), {
      localVue,
      methods: { callback }
    });

    let btn = wrapper.find('.close-btn');

    btn.trigger('click');

    expect(wrapper.vm.formData.show).to.equal(false);

    sinon.assert.calledOnce(callback);
  });*/

});

