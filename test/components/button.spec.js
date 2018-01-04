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
});
