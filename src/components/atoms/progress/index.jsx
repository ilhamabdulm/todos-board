import PropTypes from 'prop-types';

import { CheckCircle } from 'lib/images';

import styles from './styles.module.css';

const Progress = (props) => {
  const { percentage, isDone } = props;

  return (
    <div className={styles['progress-container']}>
      <div className={styles['bar-container']}>
        <span
          className={styles['bar']}
          style={{
            backgroundColor: isDone ? 'var(--green)' : 'var(--blue)',
            width: `${percentage}%`,
          }}
        />
      </div>
      {isDone ? (
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircle />
        </p>
      ) : (
        <p>{percentage}%</p>
      )}
    </div>
  );
};

Progress.defaultProps = {
  percentage: 0,
  isDone: false,
};

Progress.propTypes = {
  percentage: PropTypes.string | PropTypes.number,
  isDone: PropTypes.bool,
};

export default Progress;
