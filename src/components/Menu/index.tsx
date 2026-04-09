// Todo css que tiver .module.css são arquivos de escopo, não tendo acesso global
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

// Tudo que é colocado entre o componente no App vira o children (props)
export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <SunIcon />
      </a>
    </nav>
  );
}
