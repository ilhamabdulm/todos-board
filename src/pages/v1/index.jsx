import { TaskCard } from 'components/fragments';
import MainLayout from 'components/layout/main-layout';

import styles from './styles.module.css';

const V1 = () => {
  return (
    <MainLayout>
      <header>
        <h1>Product Roadmap</h1>
      </header>
      <section className={styles['content-container']}>
        <TaskCard variant="pink" data={{ name: 'Group Task 1' }} />
        <TaskCard variant="purple" data={{ name: 'Group Task 2' }} />
        <TaskCard variant="blue" data={{ name: 'Group Task 3' }} />
        <TaskCard variant="green" data={{ name: 'Group Task 4' }} />
      </section>
    </MainLayout>
  );
};

export default V1;
