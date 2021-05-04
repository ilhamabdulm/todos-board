import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = (props) => {
  const { variant, handleClick, icon, children } = props;
  const classes = [styles['base-button'], styles[variant]]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={handleClick}>
      {icon && <img src={icon} alt="plus-circle" />}
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  variant: '',
  handleClick: () => {},
  icon: null,
  children: null,
};

Button.propTypes = {
  variant: 'primary' | 'text' | 'secondary' | 'danger',
  handleClick: PropTypes.func,
  icon: PropTypes.node | PropTypes.object,
  children: PropTypes.node,
};

export default Button;
