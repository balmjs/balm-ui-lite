import { expect } from 'chai';
import 'jsdom-global/register';
import { mount, shallow } from '@vue/test-utils';
import sinon from 'sinon';

global.expect = expect;
global.window = window;
global.mount = mount;
global.shallow = shallow;
global.sinon = sinon;
