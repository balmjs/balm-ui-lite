// main pages
import Home from '../views/home';
import Test from '../views/test';
// layouts
import BlankLayout from '../views/layouts/blank';
// sub pages
import guideRoutes from './guide';

const baseRoutes = [{
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
  path: '/test',
  name: 'test',
  component: Test,
}];

const routes = baseRoutes.concat(guideRoutes);

export default routes;
