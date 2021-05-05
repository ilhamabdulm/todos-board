import PropTypes from 'prop-types';

import { ModalBase } from 'components/atoms';
import { ExcalamationCircle } from 'lib/images';
import { useEffect } from 'react';
import { manageTodoItems } from 'utils/fetch';

const ConfirmationDelete = (props) => {
  const { visible, onClose, refetchData, data } = props;

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const handleDelete = () => {
    manageTodoItems(data.todo_id, 'delete', null, data.id)
      .then((res) => {
        console.log(res, 'Berhasil menghapus task');
        refetchData();
        onClose();
      })
      .catch((err) => {
        console.log(err, 'error hapus task');
      });
  };

  return (
    <ModalBase
      visible={visible}
      onClose={onClose}
      title="Delete Task"
      width="45rem"
      icon={<ExcalamationCircle />}
      iconColor="#FAAD14"
      okText="Delete"
      okButtonProps={{ variant: 'danger' }}
      onOk={handleDelete}
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
  refetchData: () => {},
  data: null,
};

ConfirmationDelete.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  refetchData: PropTypes.func,
  data: PropTypes.any,
};

export default ConfirmationDelete;
