import { useState } from "react";

function MeuBotao(props){
  const [contador , setContador] = useState(0);
  return (
    <>
    <h1>Contador : {contador}</h1>
    <button onClick={()=>setContador(contador - 1)}>{props.texto}</button>
    <button onClick={()=>setContador(contador + 1)}>{props.texto2}</button>
    <br />
    </>
  )
}

function MeuInput(){
  const [nome , setNome] = useState ('')
  const valorInput = (event) => {
    setNome(event.target.value)
  }
  return(
    <>
    <br />
    <input type="text" placeholder="Digite aqui" onChange={valorInput} />
    <h2> Olá {nome || 'Visitante'}</h2>
    </>
  )
}










function App() {

  return (
    <>
    <MeuBotao texto="Diminuir" texto2="Adicionar"/>
    <MeuInput />
    </>
  );
}

export default App;
