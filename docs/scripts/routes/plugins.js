const Notify = () => import('../views/plugins/notify');
const Event = () => import('../views/plugins/event');
const Validator = () => import('../views/plugins/validator');

const pluginsRoutes = [{
  path: 'notify',
  name: 'plugins.notify',
  component: Notify
}, {
  path: 'event',
  name: 'plugins.event',
  component: Event
}, {
  path: 'validator',
  name: 'plugins.validator',
  component: Validator
}];

export default pluginsRoutes;
