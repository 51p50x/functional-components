import {useState} from 'react'

//hooks rules, don't call a hook inside a loop or a flow control structure
//hooks rules, just call a hook in 2 parts: in react component and custom hooks
//hooks rules, when creating a custom it always start with 'hook use'
const App = () => {
    const [contador, setContador] = useState(0)
    return(
        <div>
            Contador: {contador}
            <br/>
            <button onClick={()=>setContador(contador + 1)}>Incrementar</button>
        </div>
    )
}

export default App