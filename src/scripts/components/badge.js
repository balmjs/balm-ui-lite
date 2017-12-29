import multiBootstrap from '../config/multi-bootstrap';
import UiBadge from './common/badge';
import UiBadgeLink from './common/badge-link';

const UiBadgeComponents = {
  UiBadge,
  UiBadgeLink
};

multiBootstrap(UiBadgeComponents);

export default UiBadgeComponents;
export {
  UiBadge,
  UiBadgeLink
};
