import { useRef, useState, useEffect } from 'react';
import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import styles from './styles.module.scss';

const navItems = [
  {
    name: 'About Me',
    children: ['Name : Elynna', 'Age : 24'],
  },
  {
    name: 'Skills',
    children: ['React', 'Scss', 'Node.js', 'Express'],
  },
].map((items, i) => ({
  ...items,
  id: i,
  children: items.children.map((child, x) => ({ name: child, id: x })),
}));

const NavListItem = ({ name, dropdownItems, setDropdownOpen, setDropdownInfo }) => {
  const dropdownRef = useRef();
  const [dropdownStatus, setDropdownStatus] = useState('hide');
  const dropdownClass =
    dropdownStatus === 'hide'
      ? styles.dropdown_hide
      : dropdownStatus === 'show'
      ? styles.dropdown_show
      : styles.dropdown_show_active;

  const handleEnter = () => {
    setDropdownStatus('show');
    setDropdownOpen(true);
  };

  const handleLeave = () => {
    setDropdownStatus('hide');
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (dropdownStatus === 'show') {
      setDropdownStatus('active');
      const { width, height, left, top } = dropdownRef.current.getBoundingClientRect();
      if (!width || !height || !left || !top) return;
      setDropdownInfo({ width, height, left, top });
    }
  }, [dropdownStatus]);

  return (
    <li
      className={styles.main_item}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {name}
      <ul className={`${styles.base_dropdown} ${dropdownClass}`} ref={dropdownRef}>
        {dropdownItems.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </li>
  );
};

const NavDropdownPage = () => {
  const menuRef = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownInfo, setDropdownInfo] = useState({});

  useEffect(() => {
    if (!menuRef.current) return;

    const menu = menuRef.current;
    const { left, top, height } = menu.getBoundingClientRect();
    setDropdownInfo({ left, top: top + height });
  }, []);

  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title
        title='Use your mouse to hover links'
        size='s'
        titleClassName={styles.title}
      />

      <div
        className={`${styles.dropdownBg} ${dropdownOpen ? styles.open : ''}`}
        style={{
          width: `${dropdownInfo.width}px`,
          height: `${dropdownInfo.height - 20}px`, // 20 為三角形的高
          transform: `translate(${dropdownInfo.left}px, ${dropdownInfo.top}px)`,
        }}
      >
        <span className={styles.arrow} />
      </div>

      <nav>
        <ul className={styles.menu} ref={menuRef}>
          {navItems.map(({ id, name, children }) => (
            <NavListItem
              key={id}
              name={name}
              dropdownItems={children}
              setDropdownOpen={setDropdownOpen}
              setDropdownInfo={setDropdownInfo}
            />
          ))}
        </ul>
      </nav>
    </LayoutCol1>
  );
};

export default NavDropdownPage;
