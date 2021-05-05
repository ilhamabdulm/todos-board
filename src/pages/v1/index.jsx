import { useEffect, useState } from 'react';

import ModalBase from 'components/atoms/modal-base';
import { TaskCard } from 'components/fragments';
import MainLayout from 'components/layout/main-layout';

import styles from './styles.module.css';
import { getTodoList } from 'utils/fetch';

const V1 = () => {
  const [openModal, setOpenModal] = useState({
    state: false,
    data: null,
    type: '',
  });
  const [todos, setTodos] = useState([]);

  const colorVariant = ['pink', 'purple', 'blue', 'green'];

  useEffect(() => {
    getTodoList()
      .then((res) => {
        console.log(res, 'Berhasil get todo');
        setTodos(res);
      })
      .catch((err) => {
        console.log(err, 'error list todo');
      });
  }, []);

  return (
    <>
      <MainLayout>
        <header>
          <h1>Product Roadmap</h1>
        </header>
        <section className={styles['content-container']}>
          {todos.map((todo, idx) => {
            return <TaskCard variant={colorVariant[idx]} data={todo} />;
          })}
        </section>
      </MainLayout>

      {openModal.state && <ModalBase />}
    </>
  );
};

export default V1;
