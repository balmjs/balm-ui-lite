// main pages
import Home from '../views/home';
import Test from '../views/test';
// layouts
import BlankLayout from '../views/layouts/blank';
// sub pages
import guideRoutes from './guide';
import componentsRoutes from './components';

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/guide',
  name: 'guide',
  redirect: '/guide/intro',
  component: BlankLayout,
  children: guideRoutes
}, {
  path: '/components',
  name: 'components',
  redirect: '/components/button',
  component: BlankLayout,
  children: componentsRoutes
}, {
  path: '/test',
  name: 'test',
  component: Test,
}];

export default routes;
