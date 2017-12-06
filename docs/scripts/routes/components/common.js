const Badge = () => import('../../views/badge');
const Button = () => import('../../views/button');
const Card = () => import('../../views/card');
const Chip = () => import('../../views/chip');
const Menu = () => import('../../views/menu');
const Tooltip = () => import('../../views/tooltip');
const Divider = () => import('../../views/divider');

const commonRoutes = [{
  path: 'badge',
  name: 'components.badge',
  component: Badge
}, {
  path: 'button',
  name: 'components.button',
  component: Button
}, {
  path: 'card',
  name: 'components.card',
  component: Card
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
