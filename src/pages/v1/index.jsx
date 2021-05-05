import { useEffect, useState } from 'react';

import { TaskCard } from 'components/fragments';
import MainLayout from 'components/layout/main-layout';
import CreateModal from 'components/fragments/modal-create';

import { getTodoList } from 'utils/fetch';

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
              />
            );
          })}
        </section>
      </MainLayout>

      {openModal.state && openModal.type === 'create' && (
        <CreateModal
          visible={openModal.state}
          onClose={() =>
            setOpenModal({
              state: false,
              data: null,
              type: '',
            })
          }
          id={openModal.data}
          refetchData={fetchData}
        />
      )}
    </>
  );
};

export default V1;
