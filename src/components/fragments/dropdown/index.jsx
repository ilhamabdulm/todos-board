import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Dropdown = (props) => {
  const { children, menu } = props;

  return (
    <div className={styles.dropdown}>
      {children}
      <div className={styles['dropdown-content']}>
        {menu.map((mn) => (
          <p onClick={mn.action}>{mn.text}</p>
        ))}
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  children: null,
  menu: [],
};

Dropdown.propTypes = {
  children: PropTypes.node,
  menu: PropTypes.array,
};

export default Dropdown;
