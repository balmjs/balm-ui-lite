import multiBootstrap from '../config/multi-bootstrap';
import UiCard from './card/card';
import UiCardHead from './card/card-head';
import UiCardTitle from './card/card-title';
import UiCardSubtitle from './card/card-subtitle';
import UiCardMedia from './card/card-media';
import UiCardBody from './card/card-body';
import UiCardActions from './card/card-actions';
import UiCardMenu from './card/card-menu';

const UiCardComponents = {
  UiCard,
  UiCardHead,
  UiCardTitle,
  UiCardSubtitle,
  UiCardMedia,
  UiCardBody,
  UiCardActions,
  UiCardMenu
};

multiBootstrap(UiCardComponents);

export default UiCardComponents;
export {
  UiCard,
  UiCardHead,
  UiCardTitle,
  UiCardSubtitle,
  UiCardMedia,
  UiCardBody,
  UiCardActions,
  UiCardMenu
};
