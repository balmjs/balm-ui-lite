import 'jsdom-global/register';
import { mount } from 'vue-test-utils';
import UiButton from '../../components/button';

describe('<ui-button>', () => {
  it('renders a button', () => {
    let wrapper = mount(UiButton);
    let classList = wrapper.vm.$el.classList;
    expect(classList[0]).to.equal('mdl-button');
  });
});
