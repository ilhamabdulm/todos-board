import PropTypes from 'prop-types';

import styles from './styles.module.css';

const BaseCard = (props) => {
  const { variant, width, children } = props;
  const classes = [styles['base-card'], styles[variant], styles[width]]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};

BaseCard.defaultProps = {
  variant: 'default',
  width: '',
  children: <></>,
};

BaseCard.propTypes = {
  variant: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node,
};

export default BaseCard;
