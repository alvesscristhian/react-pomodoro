import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { Footer } from "./components/Footer";

import "./styles/theme.css";
import "./styles/global.css";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Heading } from "./components/Heading";
import { useState } from "react";

export function App() {
  // Todos os componentes que usam "numero" saimbam das mudanças de valor
  // Sempre que usar useState, não vou usar atribuição diretamente
  // const [numero, setNumero] = useState(() => {
  //   console.log("lazy initialization");
  //   return 0;
  // });

  const [numero, setNumero] = useState(0);

  function handleClick() {
    // setNumero((prevState) => prevState + 1);
    setNumero(1);
  }

  return (
    <>
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="get">
          <div className="formRow">
            <DefaultInput
              labelText="task:"
              id="meuInput"
              type="text"
              placeholder="Digite sua tarefa"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
