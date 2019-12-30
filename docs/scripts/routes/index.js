// layouts
import BlankLayout from '@/views/layouts/blank';
// sub pages
import guideRoutes from './guide';
import componentsRoutes from './components';
// plugins
import pluginsRoutes from './plugins';
// directives
import directivesRoutes from './directives';
// helpers
import helpersRoutes from './helpers';
// home page
import Home from '@/views/home';
// test
const Test = () => import('@/views/test');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/guide',
    name: 'guide',
    redirect: '/guide/intro',
    component: BlankLayout,
    children: guideRoutes
  },
  {
    path: '/components',
    name: 'components',
    redirect: '/components/button',
    component: BlankLayout,
    children: componentsRoutes
  },
  {
    path: '/plugins',
    name: 'plugins',
    redirect: '/plugins/event',
    component: BlankLayout,
    children: pluginsRoutes
  },
  {
    path: '/directives',
    name: 'directives',
    redirect: '/directives/lazy-load',
    component: BlankLayout,
    children: directivesRoutes
  },
  {
    path: '/helpers',
    name: 'helpers',
    redirect: '/helpers/typeof',
    component: BlankLayout,
    children: helpersRoutes
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
];

export default routes;
