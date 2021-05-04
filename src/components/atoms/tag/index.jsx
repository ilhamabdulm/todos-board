import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Tag = (props) => {
  const { color, text } = props;
  const classes = [styles.tag, styles[color]].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <p>{text}</p>
    </div>
  );
};

Tag.defaultProps = {
  color: '',
  text: 'Text',
};

Tag.propTypes = {
  color: 'pink' | 'blue' | 'green' | 'purple',
  text: PropTypes.string,
};

export default Tag;
