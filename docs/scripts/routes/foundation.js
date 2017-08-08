const Helpers = () => import('../views/helpers');
const Mixins = () => import('../views/mixins');
const Plugins = () => import('../views/plugins');

const foundationRoutes = [{
  path: '/helpers',
  name: 'helpers',
  component: Helpers,
  meta: {
    title: 'BalmUI - Helpers',
    keywords: '',
    description: ''
  }
}, {
  path: '/mixins',
  name: 'mixins',
  component: Mixins,
  meta: {
    title: 'BalmUI - Mixins',
    keywords: '',
    description: ''
  }
}, {
  path: '/plugins',
  name: 'plugins',
  component: Plugins,
  meta: {
    title: 'BalmUI - Plugins',
    keywords: '',
    description: ''
  }
}];

export default foundationRoutes;
