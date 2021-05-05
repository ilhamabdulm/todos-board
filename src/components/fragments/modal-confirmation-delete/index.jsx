import PropTypes from 'prop-types';

import { ModalBase } from 'components/atoms';
import { ExcalamationCircle } from 'lib/images';

import styles from './styles.module.css';
import { Button } from 'components/atoms';

const ConfirmationDelete = (props) => {
  const { visible, onClose, id, refetchData } = props;

  return (
    <ModalBase
      visible={visible}
      onClose={onClose}
      title="Delete Task"
      width="50rem"
      icon={<ExcalamationCircle />}
      iconColor="#FAAD14"
    >
      <p>
        Are you sure want to delete this task? your action can’t be reverted.
      </p>
    </ModalBase>
  );
};

ConfirmationDelete.defaultProps = {
  visible: false,
  onClose: () => {},
  id: '',
  refetchData: () => {},
};

ConfirmationDelete.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.string | PropTypes.number,
  refetchData: PropTypes.func,
};

export default ConfirmationDelete;
