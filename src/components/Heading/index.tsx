// Todo css que tiver .module.css são arquivos de escopo, não tendo acesso global
import styles from "./styles.module.css";

// Seu tipo é um objeto
type HeadingProps = {
  children: React.ReactNode; // A chave vai aceitar tudo que o react como children
};

// Tudo que é colocado entre o componente no App vira o children (props)
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
