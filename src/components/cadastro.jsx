import { useState } from "react";

function Crud() {
  const [lista, setLista] = useState([]);
  const [textoDigitado, settextoDigitado] = useState([null]);
  const [idEmEdicao , setidEmEdicao] = useState(null)

  const salvarItem = (e) => {
    e.preventDefault();

    if (!textoDigitado.trim()) return;

    if(idEmEdicao !== null) {
        const listaAtualizada = lista.map((item))
    }
    const novoItem = {
      id: Date.now(),
      nome: textoDigitado,
    };
    setLista([...lista, novoItem]);
  };

  const removerItem = (idParaApagar) => {
    const listaFiltrada = lista.filter((item) => {
      return item.id !== idParaApagar
    });
    setLista(listaFiltrada)
  };

  return (
   
      <div style={{ backgroundColor: "lightblue",borderRadius: "8px", textAlign:"center", padding:"10px", marginBottom: "20px"}}>
        <h1>Meu primeiro C.R.U.D</h1>
        <form onSubmit={salvarItem}>
          <input
            type="text"
            placeholder="Digite aqui ..."
            value={textoDigitado}
            onChange={(e) => settextoDigitado(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
            {lista.map((item) => {
          return (
            <li key={item.id}>
              {item.nome}
              <button type="button" onClick={() => { removerItem(item.id);}}> Excluir</button>
            </li>
          );
        })}
        </ul>
        {/* <ul>
          {lista.map((item) => {
            return <li key={item.id}>{item.nome}</li>;
          })}
        // </ul>  Exibi os itens da lista  */}   
      </div>
    
  );
}

export default Crud;
