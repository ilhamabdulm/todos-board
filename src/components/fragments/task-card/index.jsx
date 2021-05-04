import { useState } from 'react';
import PropTypes from 'prop-types';

import { ItemCard } from '..';

import { CardBase, Tag, Button } from 'components/atoms';
import { IC_PLUSCIRCLE } from 'lib/images';

import styles from './styles.module.css';

const TaskCard = (props) => {
  const { variant, data } = props;
  const [items, setItems] = useState([]);

  return (
    <CardBase variant={variant} width="max-w-30">
      <header className={styles['card-header']}>
        <Tag color={variant} text={data.name} />
        <h5>January - March</h5>
      </header>
      <section className={styles['card-section']}>
        {items.length ? null : <ItemCard />}
      </section>
      <footer>
        <Button
          icon={IC_PLUSCIRCLE}
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
