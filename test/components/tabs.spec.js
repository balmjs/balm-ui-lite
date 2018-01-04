import { UiTabs, UiTabBar, UiTab, UiPanel } from '../../components/tabs';

describe('Tabs Test', () => {
  it('renders a <ui-tabs>', () => {
    const spy = sinon.spy();

    let wrapper = shallow(UiTabs, {
      propsData: {
        active: 0
      },
      methods: {
        activeTab: spy
      }
    });

    wrapper.setProps({
      active: 100
    });

    expect(wrapper.classes()).to.contain('mdl-tabs');
    expect(spy.calledWith(100)).to.equal(true);
    // expect(spy.secondCall.args[0]).to.equal(100);
  });

  it('<ui-tab-bar @change>', () => {
    let wrapper = shallow(UiTabBar, {
      propsData: {
        position: 'left'
      }
    });

    wrapper.vm.$emit('change', 2);

    expect(wrapper.classes()).to.contain('mdl-tabs--tab-left');
    expect(wrapper.emitted().change[0]).to.deep.equal([2]);
  });

  // <ui-tab> 带有`$parent`，暂时不做测试

  it('renders a <ui-panel>', () => {
    let wrapper = shallow(UiPanel, {
      slots: {
        default: 'Content'
      }
    });

    expect(wrapper.text()).to.equal('Content');
  });
});
