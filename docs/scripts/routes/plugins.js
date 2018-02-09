const Notify = () => import('../views/plugins/notify');
const Event = () => import('../views/plugins/event');
const Validator = () => import('../views/plugins/validator');
const Alert = () => import('../views/plugins/alert');
const Confirm = () => import('../views/plugins/confirm');
const Prompt = () => import('../views/plugins/prompt');
const Toast = () => import('../views/plugins/toast');

const pluginsRoutes = [
  {
    path: 'notify',
    name: 'plugins.notify',
    component: Notify
  },
  {
    path: 'event',
    name: 'plugins.event',
    component: Event
  },
  {
    path: 'alert',
    name: 'plugins.alert',
    component: Alert
  },
  {
    path: 'confirm',
    name: 'plugins.confirm',
    component: Confirm
  },
  {
    path: 'prompt',
    name: 'plugins.prompt',
    component: Prompt
  },
  {
    path: 'toast',
    name: 'plugins.toast',
    component: Toast
  },
  {
    path: 'validator',
    name: 'plugins.validator',
    component: Validator
  }
];

export default pluginsRoutes;
