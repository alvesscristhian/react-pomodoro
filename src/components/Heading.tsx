// Todo css que tiver .module.css são arquivos de escopo, não tendo acesso global
import styles from "./Heading.module.css";

// Tudo que é colocado entre o componente no App vira o children (props)
export function Heading(props) {
  console.log(props);
  return <h1 className={styles.heading}>{props.children}</h1>;
}
