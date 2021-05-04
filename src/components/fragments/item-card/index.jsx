import PropTypes from 'prop-types';

import { CardBase } from 'components/atoms';

import styles from './styles.module.css';

const ItemCard = (props) => {
  const { data } = props;

  return (
    <CardBase variant="default">
      {!data ? (
        <span className={styles['placeholder']}>No task avalaible</span>
      ) : (
        <section className={styles['item-content']}>
          <h3>{data.name}</h3>

          <p>{data.progress_percentage}</p>
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
