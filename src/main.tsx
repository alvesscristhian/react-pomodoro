import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  // Se o documento tiver esse elemento vai renderizar abaixo
  // StrictMode - Roda o código 2x para garantir que o code vai funcionar, ao buildar não acontece mais
  <StrictMode>
    <App />
  </StrictMode>,
  // App - Utiliza o componente App ná página
);
