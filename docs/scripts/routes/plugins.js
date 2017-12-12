const Notify = () => import('../views/plugins/notify');
const Event = () => import('../views/plugins/event');

const pluginsRoutes = [{
  path: 'notify',
  name: 'plugins.notify',
  component: Notify
}, {
  path: 'event',
  name: 'plugins.event',
  component: Event
}];

export default pluginsRoutes;
