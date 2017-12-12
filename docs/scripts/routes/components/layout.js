const Layout = () => import('../views/layout');
const Grid = () => import('../views/grid');
const Tabs = () => import('../views/tabs');

const layoutRoutes = [{
  path: '/layout',
  name: 'layout',
  component: Layout
}, {
  path: '/grid',
  name: 'grid',
  component: Grid
}, {
  path: '/tabs',
  name: 'tabs',
  component: Tabs
}];

export default layoutRoutes;