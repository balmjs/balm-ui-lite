const Layout = () => import('../views/layout');
const Grid = () => import('../views/grid');
const Tabs = () => import('../views/tabs');
const Footer = () => import('../views/footer');

const layoutRoutes = [{
  path: '/layout',
  name: 'layout',
  component: Layout,
  meta: {
    title: 'BalmUI - Layout',
    keywords: '',
    description: ''
  }
}, {
  path: '/grid',
  name: 'grid',
  component: Grid,
  meta: {
    title: 'BalmUI - Grid',
    keywords: '',
    description: ''
  }
}, {
  path: '/tabs',
  name: 'tabs',
  component: Tabs,
  meta: {
    title: 'BalmUI - Tabs',
    keywords: '',
    description: ''
  }
}, {
  path: '/footer',
  name: 'footer',
  component: Footer,
  meta: {
    title: 'BalmUI - Footer',
    keywords: '',
    description: ''
  }
}];

export default layoutRoutes;
