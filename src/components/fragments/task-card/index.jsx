import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ItemCard } from '..';

import { CardBase, Tag, Button } from 'components/atoms';
import { PlusCircle } from 'lib/images';

import styles from './styles.module.css';
import { manageTodoItems } from 'utils/fetch';

const TaskCard = (props) => {
  const { variant, data } = props;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data.id) {
      console.log(data, 'this is data from task card');
      fetchData(data.id);
    }
  }, [data]);

  const fetchData = (id) => {
    setLoading(true);

    manageTodoItems(id, 'get')
      .then((res) => {
        console.log(res, 'todo items');
        setItems(res);
      })
      .catch((err) => {
        console.log(err, 'error fetch todo items');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <CardBase variant={variant} width="max-w-30">
      <header className={styles['card-header']}>
        <Tag color={variant} text={data.title} />
        <h5>{data.description}</h5>
      </header>
      <section className={styles['card-section']}>
        {!loading ? (
          items.length ? (
            items.map((item) => (
              <ItemCard key={item.id} variant="default" data={item} />
            ))
          ) : (
            <ItemCard />
          )
        ) : (
          <p>Fetching data...</p>
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
