import UiDivider from '../../components/divider';

describe('<ui-divider>', () => {
  it('默认渲染一个水平的分割线', () => {
    let wrapper = mount(UiDivider, {
      slots: {
        default: 'diviiiiider!'
      }
    });
    expect(wrapper.text()).to.equal('diviiiiider!');
    expect(wrapper.classes()).to.contain('horizontal');
  });

  it(`type为'horizontal'或'h'或0时，应该渲染为一个水平分割线`, () => {
    let wrapper1 = mount(UiDivider, {
      propsData: {
        type: 'horizontal'
      }
    });
    let wrapper2 = mount(UiDivider, {
      propsData: {
        type: 'h'
      }
    });
    let wrapper3 = mount(UiDivider, {
      propsData: {
        type: 0
      }
    });

    let result = wrapper1.vm.$el.classList.contains('horizontal') &&
      wrapper2.vm.$el.classList.contains('horizontal') &&
      wrapper3.vm.$el.classList.contains('horizontal');

    expect(result).to.equal(true);
  });

  it(`type为'vertical'或'v'或1时，应该渲染为一个垂直分割线`, () => {
    let wrapper1 = mount(UiDivider, {
      propsData: {
        type: 'vertical'
      }
    });
    let wrapper2 = mount(UiDivider, {
      propsData: {
        type: 'v'
      }
    });
    let wrapper3 = mount(UiDivider, {
      propsData: {
        type: 1
      }
    });

    let result = wrapper1.vm.$el.classList.contains('vertical') &&
      wrapper2.vm.$el.classList.contains('vertical') &&
      wrapper3.vm.$el.classList.contains('vertical');

    expect(result).to.equal(true);
  })
});
