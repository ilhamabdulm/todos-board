import PropTypes from 'prop-types';

import { ModalBase } from 'components/atoms';

import styles from './styles.module.css';
import { Input } from 'components/atoms';
import { useState } from 'react';
import { manageTodoItems } from 'utils/fetch';

const CreateModal = (props) => {
  const { visible, onClose, id, refetchData } = props;
  const [values, setValues] = useState({
    name: '',
    progress_percentage: null,
  });

  const handleSubmit = () => {
    const payload = {
      ...values,
      progress_percentage: Number(values.progress_percentage),
    };
    manageTodoItems(id, 'post', payload)
      .then((res) => {
        console.log(res);
        onClose();
        refetchData();
      })
      .catch((err) => {
        console.log(err, 'error create task');
      });
  };

  return (
    <ModalBase
      visible={visible}
      onClose={onClose}
      title="Create Task"
      width="70rem"
      okText="Save Task"
      onOk={handleSubmit}
    >
      <section>
        <form className={styles['form-container']}>
          <Input
            label="Task Name"
            id="task-name"
            type="text"
            placeholder="example: Build rocket to Mars."
            value={values.name}
            onChange={(e) => {
              const val = e.target.value;
              setValues({
                ...values,
                name: val,
              });
            }}
          />
          <Input
            label="Progress"
            id="progress-count"
            type="number"
            placeholder="0%"
            width="20%"
            value={values.progress_percentage}
            onChange={(e) => {
              const val = e.target.value;
              setValues({
                ...values,
                progress_percentage: val,
              });
            }}
          />
        </form>
      </section>
    </ModalBase>
  );
};

CreateModal.defaultProps = {
  visible: false,
  onClose: () => {},
  id: '',
  refetchData: () => {},
};

CreateModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.string | PropTypes.number,
  refetchData: PropTypes.func,
};

export default CreateModal;
