import UiButton from '../../components/button';

describe('<ui-button>', () => {
  it('renders a default button', () => {
    let wrapper = mount(UiButton, {
      propsData: {
        noRipple: true
      },
      slots: {
        default: 'Button'
      }
    });
    let el = wrapper.vm.$el;

    expect(el.classList.contains('mdl-button')).to.equal(true);
    expect(el.innerHTML).to.equal('Button');
  });

  it('renders a fab button', () => {
    let wrapper = mount(UiButton, {
      propsData: {
        fab: true
      }
    });
    let classList = wrapper.vm.$el.classList;

    expect(classList.contains('mdl-button--fab')).to.equal(true);
  });

  it('renders a raised button', () => {
    let wrapper = mount(UiButton, {
      propsData: {
        raised: true
      }
    });
    let classList = wrapper.vm.$el.classList;

    expect(classList.contains('mdl-button--raised')).to.equal(true);
  });
});
