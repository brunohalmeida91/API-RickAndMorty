import { useEffect, useState } from "react";

function ListaDeProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((resposta) => resposta.json())
      // CORREÇÃO: Acessando .results onde a lista de personagens realmente está
      .then((data) => setProdutos(data.results || [])); 
  }, []);

  return (
    <div>
      {/* CORREÇÃO: display corrigido e flexWrap em CamelCase */}
      <ul style={{ display: "flex", listStyle: "none", flexWrap: "wrap", padding: 0 }}>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <div
              style={{
                background: "grey",
                color: "white",
                padding: "15px 5px",
                margin: "10px",
                width: "250px",
                display: "flex", // CORREÇÃO: diplay -> display
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "15px",
              }}
            >
              {/* CORREÇÃO: Utilizando a propriedade correta 'image' da API */}
              <img
                src={produto.image} 
                alt={produto.name}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <h2
                  style={{
                    background: "lightgrey",
                    color: "black",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    fontSize: "1.2rem",
                  }}
                >
                  {produto.name}
                </h2>
                
                {/* CORREÇÃO: Substituído campos fictícios por dados reais */}
                <p><strong>Espécie:</strong> {produto.species}</p>
                <p><strong>Status:</strong> {produto.status}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeProdutos;
