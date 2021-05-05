import { useEffect, useState } from 'react';

import {
  TaskCard,
  ConfirmationDelete,
  ModalCreate,
} from 'components/fragments';
import MainLayout from 'components/layout/main-layout';

import { getTodoList, manageTodoItems } from 'utils/fetch';

import styles from './styles.module.css';

const V1 = () => {
  const [openModal, setOpenModal] = useState({
    state: false,
    data: null,
    type: '',
  });
  const [todos, setTodos] = useState([]);

  const colorVariant = ['pink', 'purple', 'blue', 'green'];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getTodoList()
      .then((res) => {
        console.log(res, 'Berhasil get todo');
        setTodos(res);
      })
      .catch((err) => {
        console.log(err, 'error list todo');
      });
  };

  const handleMove = (todoId, itemId, index, move) => {
    const searchIndex = move === 'prev' ? index - 1 : index + 1;
    const foundTodo = todos[searchIndex];
    const payload = {
      target_todo_id: foundTodo.id,
    };

    console.log(foundTodo);

    manageTodoItems(todoId, 'patch', payload, itemId)
      .then((res) => {
        console.log(res, 'Berhasil move task');
        fetchData();
      })
      .catch((err) => {
        console.log(err, 'error move task');
      });
  };

  return (
    <>
      <MainLayout>
        <header>
          <h1>Product Roadmap</h1>
        </header>
        <section className={styles['content-container']}>
          {todos.map((todo, idx) => {
            return (
              <TaskCard
                variant={colorVariant[idx] || 'blue'}
                data={todo}
                setOpenModal={setOpenModal}
                isFirst={idx === 0}
                isLast={idx === todos.length - 1}
                handleMove={(itemId, move) =>
                  handleMove(todo.id, itemId, idx, move)
                }
              />
            );
          })}
        </section>
      </MainLayout>

      {openModal.state && (
        <ModalCreate
          visible={openModal.type === 'create' || openModal.type === 'edit'}
          onClose={() =>
            setOpenModal({
              state: false,
              data: null,
              type: '',
            })
          }
          id={openModal.data.id}
          data={openModal.type === 'edit' ? openModal.data : null}
          isEdit={openModal.type === 'edit'}
          refetchData={fetchData}
        />
      )}

      {openModal.state && openModal.type === 'delete' && (
        <ConfirmationDelete
          visible={openModal.state && openModal.type === 'delete'}
          onClose={() =>
            setOpenModal({
              state: false,
              data: null,
              type: '',
            })
          }
          id={openModal.data.id}
          data={openModal.data}
          refetchData={fetchData}
        />
      )}
    </>
  );
};

export default V1;
