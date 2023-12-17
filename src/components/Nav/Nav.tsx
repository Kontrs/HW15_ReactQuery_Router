import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const navItems = [
  {
    label: 'About Project',
    path: '/project'
  },
  {
    label: 'Movies',
    path: '/'
  },
  {
    label: 'Author',
    path: '/author'
  }
];

export const Nav = (): JSX.Element => (
  <nav className={styles.nav}>
    {navItems.map(({path, label}) => (
      <NavLink 
        to={path}
        key={label}
        className={styles.link}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
          };
        }}
      >
      {label}
      </NavLink>
    ))}
  </nav> 
)