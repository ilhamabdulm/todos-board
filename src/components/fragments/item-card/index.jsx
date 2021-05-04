import PropTypes from 'prop-types';

import { CardBase } from 'components/atoms';

import styles from './styles.module.css';
import { Button } from 'components/atoms';
import { Dots, IC_CHECKCIRCLE, IC_DOTS } from 'lib/images';
import { Progress } from 'components/atoms';

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

            <div className={styles.dropdown}>
              <Button icon={<Dots />} variant="text" />
              <div className={styles['dropdown-content']}>
                <p>Menu</p>
                <p>Menu</p>
                <p>Menu</p>
                <p>Menu</p>
              </div>
            </div>
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
