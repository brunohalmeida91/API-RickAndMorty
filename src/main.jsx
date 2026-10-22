import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ListaDeProdutos2 from "./components/produtos2";
// import Crud from './components/cadastro.jsx'
// import Aula28 from './components/aula28.jsx'
import ListaDeProdutos from "./components/produtos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* //   <App />  */}
    {/* <Crud/>
  <Aula28 /> */}
    <ListaDeProdutos />
    {/* <ListaDeProdutos2/> */}
  </StrictMode>,
);
