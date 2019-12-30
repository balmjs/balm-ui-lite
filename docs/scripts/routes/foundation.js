const Helpers = () => import('@/views/foundation/helpers');
const Mixins = () => import('@/views/foundation/mixins');
const Plugins = () => import('@/views/foundation/plugins');
const Notify = () => import('@/views/foundation/notify');

const foundationRoutes = [
  {
    path: '/helpers',
    name: 'helpers',
    component: Helpers
  },
  {
    path: '/mixins',
    name: 'mixins',
    component: Mixins
  },
  {
    path: '/plugins',
    name: 'plugins',
    component: Plugins
  },
  {
    path: '/notify',
    name: 'notify',
    component: Notify
  }
];

export default foundationRoutes;
