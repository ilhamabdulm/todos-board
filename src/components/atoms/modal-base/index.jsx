import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ModalBase = (props) => {
  const { children, visible, onClose, width, ...rest } = props;
  const classes = visible
    ? [styles['modal-container'], styles['visible']].filter(Boolean).join(' ')
    : styles['modal-container'];

  return (
    <section className={classes} style={{ width: width }}>
      <div className={styles['modal-overlay']} />
      <div className={styles['modal-content']}>
        <h1>Hi Modal</h1>
      </div>
    </section>
  );
};

export default ModalBase;
