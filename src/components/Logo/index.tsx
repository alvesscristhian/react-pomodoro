// Todo css que tiver .module.css são arquivos de escopo, não tendo acesso global
import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

// Tudo que é colocado entre o componente no App vira o children (props)
export function Logo() {  
  return <div className={styles.logo}>
    <a className={styles.logoLink} href="#">
      <TimerIcon />
      <span>Chronos</span>
    </a>
  </div>;
}
