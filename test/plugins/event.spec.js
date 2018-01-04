import { createLocalVue } from 'vue-test-utils';
import $event from '../../plugins/event';
import sinon from 'sinon';

let localVue = createLocalVue();

let createdScene = () => {
  return {
    template: `<input type="text" :value="formData.name" @change="balmUI.onChange('formData.name', $event.target.value, callback)">`,
    data () {
      return {
        formData: {
          name: ''
        }
      };
    },
    methods: {
      callback () {}
    }
  };
};

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

    expect(callback.calledOnce).to.equal(true);
  });
});

