import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Dropdown = (props) => {
  const { children, menu, position } = props;

  return (
    <div className={styles.dropdown}>
      {children}
      <div
        className={styles['dropdown-content']}
        style={{
          right: position === 'left' && 0,
          left: position === 'right' && 0,
        }}
      >
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
  position: 'left',
};

Dropdown.propTypes = {
  children: PropTypes.node,
  menu: PropTypes.array,
  position: 'left' | 'right',
};

export default Dropdown;
