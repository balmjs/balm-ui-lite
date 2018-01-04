import UiButton from '../../components/button';

describe('<ui-button>', () => {
  it('renders a default button', () => {
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

  it('renders a fab button', () => {
    let wrapper = mount(UiButton, {
      propsData: {
        fab: true
      }
    });

    expect(wrapper.classes()).to.contain('mdl-button--fab');
  });

  it('renders a raised button', () => {
    let wrapper = mount(UiButton, {
      propsData: {
        raised: true
      }
    });

    expect(wrapper.classes()).to.contain('mdl-button--raised');
  });
});
