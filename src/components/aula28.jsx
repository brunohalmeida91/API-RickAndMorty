import { useEffect, useState } from "react"

function Aula28(){
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Redenrizou")
    }, [count])

    return(
        
        <div style={{ backgroundColor: "lightblue",borderRadius: "8px",textAlign:"center",  padding:"5px" }}>
            <h3 >Contador : {count}</h3>
        <button onClick={() => setCount(count + 1)}>adicionar</button>
        </div>
    )
}
export default Aula28