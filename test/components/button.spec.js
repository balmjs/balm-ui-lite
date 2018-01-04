import UiButton from '../../components/button';

describe('Button Test', () => {
  it('renders a <ui-button>', () => {
    let wrapper = mount(UiButton, {
      slots: {
        default: 'Button'
      },
      propsData: {
        noRipple: true
      }
    });

    expect(wrapper.text()).to.equal('Button');
    expect(wrapper.classes()).to.contain('mdl-button');
  });

  it('renders a <ui-button fab>', () => {
    let wrapper = shallow(UiButton, {
      propsData: {
        fab: true
      }
    });

    expect(wrapper.classes()).to.contain('mdl-button--fab');
  });

  it('renders a <ui-button raised>', () => {
    let wrapper = shallow(UiButton, {
      propsData: {
        raised: true
      }
    });

    expect(wrapper.classes()).to.contain('mdl-button--raised');
  });

  it('renders a <ui-button icon>', () => {
    let wrapper = shallow(UiButton, {
      propsData: {
        icon: 'mood',
        noRipple: true
      }
    });

    expect(wrapper.classes()).to.contain('mdl-button--icon');
    expect(wrapper.find('.material-icons').text()).to.contain('mood');
  });

  it('<ui-button @click>', () => {
    const spy = sinon.spy();

    let wrapper = mount(UiButton, {
      methods: {
        handleClick: spy
      }
    });

    wrapper.trigger('click');

    expect(spy.calledOnce).to.equal(true);
  });
});
