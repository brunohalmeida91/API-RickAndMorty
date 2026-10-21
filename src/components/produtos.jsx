import { useEffect, useState } from "react";

function ListaDeProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((resposta) => resposta.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div>
      <ul style={{ diplay: "flex", listStyle: "none", flexwrap: "wrap" }}>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <div
              style={{
                background: "grey",
                color: "white",
                padding: "0 5px",
                margin: "10px",
                width: "250px",
                diplay: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "15px",
              }}
            >
              {/* <img
              src={produto.images}
              alt="imagem-do-produto"
              height="100%"
              width="55%"
              style={{
                background: "grey",
                borderRadius: "15px",
                padding: "25px",
              }}
            /> */}

              <div>
                <h2
                  style={{
                    position: "relative",
                    bottom: "100px",
                    background: "grey",
                    color: "black",
                    padding: "25px, 3px",
                    borderRadius: "15px",
                  }}
                >
                  Oferta do Dia
                </h2>
                {/* <p>{produto.description}</p> */}
                <p>
                  <strong>Preço</strong> R${produto.price}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeProdutos;
