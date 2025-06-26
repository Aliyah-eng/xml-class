import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Halinat</div>
      <ul className={styles.navlinks}>
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? styles.active : ''}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className={location.pathname === '/users' ? styles.active : ''}
          >
            users
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
