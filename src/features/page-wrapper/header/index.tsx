// Header.jsx
import logo from '../../../assets/icons/logo_ixora.svg';
import styles from './header.module.css'; // Путь к вашему файлу стилей

export const Header = ({ onSearch }: { onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>LOGO</div>
      </div>
      <div className={styles.centerSection}>
        <input type="text" placeholder="Search" className={styles.searchInput} onChange={onSearch} />
      </div>
    </header>
  );
};
