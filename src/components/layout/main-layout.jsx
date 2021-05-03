import PropTypes from 'prop-types';

import { LOGO } from 'lib/images';

import styles from './styles.module.css';

const MainLayout = ({ children }) => {
  return (
    <section>
      <aside className={styles.sidebar}>
        <header>
          <img src={LOGO} alt="logo-svg" />
        </header>
      </aside>
      <article className={styles.content}>{children}</article>
    </section>
  );
};

MainLayout.defaultProps = {
  children: null,
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
