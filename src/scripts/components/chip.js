import multiBootstrap from '../config/multi-bootstrap';
import UiChip from './chip/chip';
import UiChipText from './chip/chip-text';
import UiChipAction from './chip/chip-action';
import UiChipContact from './chip/chip-contact';

const UiChipComponents = {
  UiChip,
  UiChipText,
  UiChipAction,
  UiChipContact
};

multiBootstrap(UiChipComponents);

export default UiChipComponents;
export { UiChip, UiChipText, UiChipAction, UiChipContact };
