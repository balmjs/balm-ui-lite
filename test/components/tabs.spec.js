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

  it('renders a <ui-tab> without $parent', () => {
    let wrapper = shallow(UiTab);

    expect(wrapper.html()).to.equal(undefined);
  });

  // TODO: provide has bug?
  // it('renders a <ui-tab> with $parent', () => {
  //   const spy = sinon.spy();

  //   let wrapper = mount(UiTab, {
  //     provide: {
  //       $parent: {}
  //     },
  //     slots: {
  //       default: 'Tab'
  //     },
  //     propsData: {
  //       noRipple: true
  //     },
  //     methods: {
  //       handleClick: spy
  //     }
  //   });

  //   console.log(wrapper.html());

  //   // wrapper.trigger('click');

  //   // expect(wrapper.text()).to.equal('Tab');
  //   // expect(spy.calledOnce).to.equal(true);
  // });

  it('renders a <ui-panel>', () => {
    let wrapper = shallow(UiPanel, {
      slots: {
        default: 'Panel'
      }
    });

    expect(wrapper.text()).to.equal('Panel');
  });
});
