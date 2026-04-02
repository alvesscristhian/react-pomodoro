import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  console.log("test");

  return (
    // React Fragment: Vira elemento pai como se fosse uma <div>, possibilitando return de dois elementos juntos em um componente
    // Heading é o componente, os atributos entram como children também
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde
        voluptatum tempora enim vero saepe doloribus libero dicta perferendis.
        Vitae officiis at optio nulla autem aperiam suscipit iure facere
        corrupti.
      </p>
    </>
  );
}
