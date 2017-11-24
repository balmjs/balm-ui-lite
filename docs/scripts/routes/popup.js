const Dialog = () => import('../views/dialog');
// const Alert = () => import('../views/Alert');
// const Confirm = () => import('../views/Confirm');
const Snackbar = () => import('../views/snackbar');

const popupRoutes = [{
  path: '/dialog',
  name: 'dialog',
  component: Dialog
}, {
  path: '/snackbar',
  name: 'snackbar',
  component: Snackbar
}];

export default popupRoutes;
