import PropTypes from 'prop-types';

import { CardBase } from 'components/atoms';

import styles from './styles.module.css';
import { Button } from 'components/atoms';
import { Dots, IC_CHECKCIRCLE, IC_DOTS } from 'lib/images';
import { Progress } from 'components/atoms';
import { Dropdown } from '..';

const ItemCard = (props) => {
  const { data } = props;

  return (
    <CardBase variant="default">
      {!data ? (
        <span className={styles['placeholder']}>No task avalaible</span>
      ) : (
        <section className={styles['item-content']}>
          <h4>{data.name}</h4>

          <div className={styles['action-group']}>
            <div style={{ width: '60%' }}>
              <Progress
                percentage={data.progress_percentage}
                isDone={data.done}
              />
            </div>

            <Dropdown
              menu={[
                { text: 'Menu 1', action: () => console.log('menu 1') },
                { text: 'Menu 1', action: () => console.log('menu 1') },
                { text: 'Menu 1', action: () => console.log('menu 1') },
              ]}
            >
              <Button icon={<Dots />} variant="text" />
            </Dropdown>
          </div>
        </section>
      )}
    </CardBase>
  );
};

ItemCard.defaultProps = {
  data: null,
};

ItemCard.propTypes = {
  data: PropTypes.object,
};

export default ItemCard;
