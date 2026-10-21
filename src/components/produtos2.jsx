import { useEffect, useState } from "react";

function ListaDeProdutos2() {
    const [produtos, setProdutos] = useState([]);
    
      useEffect(() => {
        fetch("https://dummyjson.com/products")
          .then((resposta) => resposta.json())
          .then((data) => setProdutos(data.products));
      }, []);

      return (
        <div>
            <h1>ola</h1>
            <ul>
                {produtos.map(produto => <li key={produto.id}>{produto.title}
                    <img src="{produto.images}" alt="foto-do-produto" />
                </li>)}
            </ul>
        </div>
      )
}

export default ListaDeProdutos2