// Todo css que tiver .module.css são arquivos de escopo, não tendo acesso global
import styles from "./styles.module.css";

// Tudo que é colocado entre o componente no App vira o children (props)
export function CountDown() {
  return <div className={styles.container}>00:00</div>;
}
