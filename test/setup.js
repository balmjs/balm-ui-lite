import { expect } from 'chai';
import 'jsdom-global/register';
import { mount } from 'vue-test-utils';

global.expect = expect;
global.window = window;
global.mount = mount;
