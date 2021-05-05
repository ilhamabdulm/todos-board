import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ModalBase } from 'components/atoms';
import { Input } from 'components/atoms';

import { manageTodoItems } from 'utils/fetch';

import styles from './styles.module.css';

const CreateModal = (props) => {
  const { visible, onClose, id, refetchData, data, isEdit } = props;
  const [values, setValues] = useState({
    name: '',
    progress_percentage: null,
  });

  useEffect(() => {
    if (isEdit && data) {
      setValues({
        name: data.name,
        progress_percentage: data.progress_percentage,
      });
    } else {
      setValues({
        name: '',
        progress_percentage: null,
      });
    }
  }, [isEdit, data]);

  const handleSubmit = () => {
    let payload = {
      ...values,
      progress_percentage: Number(values.progress_percentage),
    };

    const itemId = data?.id || null;
    const todoId = isEdit ? data.todo_id : id;
    const method = itemId ? 'patch' : 'post';

    if (isEdit) {
      payload = {
        ...payload,
        target_todo_id: todoId,
        done: payload.progress_percentage === 100 ? true : null,
      };
    }

    manageTodoItems(todoId, method, payload, itemId)
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
      title={isEdit ? `Edit Task` : 'Create Task'}
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
  data: null,
  isEdit: false,
};

CreateModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.string | PropTypes.number,
  refetchData: PropTypes.func,
  isEdit: PropTypes.bool,
  data: PropTypes.any,
};

export default CreateModal;
