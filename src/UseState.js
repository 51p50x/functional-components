import {Component, useState} from 'react'

//hooks rules, don't call a hook inside a loop or a flow control structure
//hooks rules, just call a hook in 2 parts: in react component and custom hooks
//hooks rules, when creating a custom it always start with 'hook use'
/*class App extends Component {
    state = {contador: 0}
    incrementar = ()=>{
        this.setState({contador: this.state.contador + 1})
    }
    render(){
        return(
            <div>
                Contador: {this.state.contador}
                <br/>
                <button onClick={this.incrementar}>Incrementar</button>
            </div>
        )
    }
}*/
//custom hook example
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }
    return [contador, incrementar]
}

const App = () => {
    const [contador, incrementar] = useContador(0)
    return(
        <div>
            Contador: {contador}
            <br/>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App