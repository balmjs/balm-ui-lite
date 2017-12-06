const notify = () => import('../views/plugins/notify');

const pluginsRoutes = [{
  path: 'notify',
  name: 'plugins.notify',
  component: notify
}];

export default pluginsRoutes;
