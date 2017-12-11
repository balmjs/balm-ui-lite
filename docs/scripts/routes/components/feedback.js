const Dialog = () => import('../../views/components/dialog');
const Snackbar = () => import('../../views/components/snackbar');

const feedbackRoutes = [{
  path: 'dialog',
  name: 'components.dialog',
  component: Dialog
}, {
  path: 'snackbar',
  name: 'components.snackbar',
  component: Snackbar
}];

export default feedbackRoutes;
