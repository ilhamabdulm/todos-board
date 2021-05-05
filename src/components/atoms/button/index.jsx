import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = (props) => {
  const { variant, handleClick, icon, children, style, ...rest } = props;
  const classes = [styles['base-button'], styles[variant]]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={handleClick} style={style} {...rest}>
      {icon &&
        (typeof icon === 'string' ? (
          <img
            src={icon}
            alt="plus-circle"
            style={{
              borderRadius: children ? '0.2rem' : '50%',
            }}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: children ? '0.8rem' : 0,
            }}
          >
            {icon}
          </div>
        ))}
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
