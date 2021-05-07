import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Input = (props) => {
  const {
    label,
    type,
    onChange,
    placeholder,
    width,
    id,
    value,
    min,
    max,
    ...rest
  } = props;

  return (
    <label htmlFor={id} className={styles['input-form']}>
      <p>{label}</p>
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={{ width: width || '' }}
        value={value}
        {...rest}
        min={min || null}
        max={max || null}
      />
    </label>
  );
};

Input.defaultProps = {
  label: '',
  type: '',
  placeholder: '',
  width: '',
  id: '',
  value: null,
  onChange: () => {},
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Input;
