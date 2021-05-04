import { useState } from 'react';
import PropTypes from 'prop-types';

import { ItemCard } from '..';

import { CardBase, Tag, Button } from 'components/atoms';
import { PlusCircle } from 'lib/images';

import styles from './styles.module.css';

const TaskCard = (props) => {
  const { variant, data } = props;
  const [items, setItems] = useState([
    {
      name: 'Created a design',
      id: 1,
      todo_id: 1,
      progress_percentage: 12,
      done: false,
    },
    {
      name: 'Created a design',
      id: 2,
      todo_id: 1,
      progress_percentage: 100,
      done: true,
    },
  ]);

  return (
    <CardBase variant={variant} width="max-w-30">
      <header className={styles['card-header']}>
        <Tag color={variant} text={data.name} />
        <h5>January - March</h5>
      </header>
      <section className={styles['card-section']}>
        {items.length ? (
          items.map((item) => (
            <ItemCard key={item.id} variant="default" data={item} />
          ))
        ) : (
          <ItemCard />
        )}
      </section>
      <footer>
        <Button
          icon={<PlusCircle />}
          variant="text"
          handleClick={() => console.log('new task')}
        >
          New Task
        </Button>
      </footer>
    </CardBase>
  );
};

TaskCard.defaultProps = {
  variant: '',
  data: null,
};

TaskCard.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.object,
};

export default TaskCard;
