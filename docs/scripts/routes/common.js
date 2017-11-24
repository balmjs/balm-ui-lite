const Badge = () => import('../views/badge');
const Button = () => import('../views/button');
const Card = () => import('../views/card');
const Chip = () => import('../views/chip');
const Loading = () => import('../views/loading');
const Menu = () => import('../views/menu');
const Tooltip = () => import('../views/tooltip');
const Divider = () => import('../views/divider');

const commonRoutes = [{
  path: '/badge',
  name: 'badge',
  component: Badge
}, {
  path: '/button',
  name: 'button',
  component: Button
}, {
  path: '/card',
  name: 'card',
  component: Card
}, {
  path: '/chip',
  name: 'chip',
  component: Chip
}, {
  path: '/loading',
  name: 'loading',
  component: Loading
}, {
  path: '/menu',
  name: 'menu',
  component: Menu
}, {
  path: '/tooltip',
  name: 'tooltip',
  component: Tooltip
}, {
  path: '/divider',
  name: 'divider',
  component: Divider
}];

export default commonRoutes;
