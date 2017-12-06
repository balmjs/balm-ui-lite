const Badge = () => import('../../views/components/badge');
const Button = () => import('../../views/components/button');
const Chip = () => import('../../views/components/chip');
const Menu = () => import('../../views/components/menu');
const Tooltip = () => import('../../views/components/tooltip');
const Divider = () => import('../../views/components/divider');

const commonRoutes = [{
  path: 'badge',
  name: 'components.badge',
  component: Badge
}, {
  path: 'button',
  name: 'components.button',
  component: Button
}, {
  path: 'chip',
  name: 'components.chip',
  component: Chip
}, {
  path: 'menu',
  name: 'components.menu',
  component: Menu
}, {
  path: 'tooltip',
  name: 'components.tooltip',
  component: Tooltip
}, {
  path: 'divider',
  name: 'components.divider',
  component: Divider
}];

export default commonRoutes;
