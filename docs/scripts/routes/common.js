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
  component: Badge,
  meta: {
    title: 'BalmUI - Badge',
    keywords: '',
    description: ''
  }
}, {
  path: '/button',
  name: 'button',
  component: Button,
  meta: {
    title: 'BalmUI - Button',
    keywords: '',
    description: ''
  }
}, {
  path: '/card',
  name: 'card',
  component: Card,
  meta: {
    title: 'BalmUI - Card',
    keywords: '',
    description: ''
  }
}, {
  path: '/chip',
  name: 'chip',
  component: Chip,
  meta: {
    title: 'BalmUI - Chip',
    keywords: '',
    description: ''
  }
}, {
  path: '/loading',
  name: 'loading',
  component: Loading,
  meta: {
    title: 'BalmUI - Loading',
    keywords: '',
    description: ''
  }
}, {
  path: '/menu',
  name: 'menu',
  component: Menu,
  meta: {
    title: 'BalmUI - Menu',
    keywords: '',
    description: ''
  }
}, {
  path: '/tooltip',
  name: 'tooltip',
  component: Tooltip,
  meta: {
    title: 'BalmUI - Tooltip',
    keywords: '',
    description: ''
  }
}, {
  path: '/divider',
  name: 'divider',
  component: Divider,
  meta: {
    title: 'BalmUI - Divider',
    keywords: '',
    description: ''
  }
}];

export default commonRoutes;
