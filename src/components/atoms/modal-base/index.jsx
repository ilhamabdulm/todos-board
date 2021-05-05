import PropTypes from 'prop-types';
import { Button } from '..';

import styles from './styles.module.css';

const ModalBase = (props) => {
  const {
    children,
    visible,
    onClose,
    width,
    title,
    icon,
    iconColor,
    okButtonProps,
    cancelButtonProps,
    okText,
    cancelText,
    onOk,
    ...rest
  } = props;
  const classes = visible
    ? [styles['modal-container'], styles['visible']].filter(Boolean).join(' ')
    : styles['modal-container'];

  return (
    <section className={classes} {...rest}>
      <div className={styles['modal-overlay']} onClick={onClose} />
      <div className={styles['modal-content']} style={{ width: width }}>
        <div style={{ display: 'flex' }}>
          {icon && (
            <aside
              style={{
                display: icon ? 'block' : 'none',
                color: iconColor,
                marginRight: '2.4rem',
              }}
            >
              <>{icon}</>
            </aside>
          )}
          <article style={{ width: '100%' }}>
            <h1 style={{ marginBottom: '2.6rem' }}>{title}</h1>
            {children}
          </article>
        </div>

        <footer className={styles['modal-footer']}>
          <Button variant="secondary" onClick={onClose}>
            {cancelText || 'Cancel'}
          </Button>
          <Button variant="primary" onClick={onOk}>
            {okText || 'Ok'}
          </Button>
        </footer>
      </div>
    </section>
  );
};

ModalBase.defaultProps = {
  children: <></>,
  visible: false,
  onClose: () => {},
  width: '',
  title: '',
  icon: false,
  iconColor: '',
  okButtonProps: {},
  cancelButtonProps: {},
  okText: 'Ok',
  cancelText: 'Cancel',
  onOk: () => {},
};

ModalBase.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  width: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.any,
  iconColor: PropTypes.string,
  okButtonProps: PropTypes.object,
  cancelButtonProps: PropTypes.object,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onOk: PropTypes.func,
};

export default ModalBase;
