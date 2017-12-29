import multiBootstrap from '../config/multi-bootstrap';
import UiDialog from './dialog/dialog';
import UiDialogTitle from './dialog/dialog-title';
import UiDialogContent from './dialog/dialog-content';
import UiDialogActions from './dialog/dialog-actions';

const UiDialogComponents = {
  UiDialog,
  UiDialogTitle,
  UiDialogContent,
  UiDialogActions
};

multiBootstrap(UiDialogComponents);

export default UiDialogComponents;
export {
  UiDialog,
  UiDialogTitle,
  UiDialogContent,
  UiDialogActions
};
