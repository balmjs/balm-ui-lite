// Setup JSDOM
import 'jsdom-global/register';
import { expect } from 'chai';
import { mount, shallow } from '@vue/test-utils';
import sinon from 'sinon';

global.window = window;
global.expect = expect;
global.mount = mount;
global.shallow = shallow;
global.sinon = sinon;
