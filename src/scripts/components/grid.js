import multiBootstrap from '../config/multi-bootstrap';
import UiGrid from './grid/grid';
import UiCell from './grid/cell';

const UiGridComponents = {
  UiGrid,
  UiCell
};

multiBootstrap(UiGridComponents);

export default UiGridComponents;
export {
  UiGrid,
  UiCell
};
