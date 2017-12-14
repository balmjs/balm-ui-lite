const Layout = () => import('../../views/components/layout');
const Grid = () => import('../../views/components/grid');
const Tabs = () => import('../../views/components/tabs');

const layoutRoutes = [{
  path: 'layout',
  name: 'components.layout',
  component: Layout
}, {
  path: 'grid',
  name: 'components.grid',
  component: Grid
}, {
  path: 'tabs',
  name: 'components.tabs',
  component: Tabs
}];

export default layoutRoutes;
