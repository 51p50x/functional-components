const impura = () => new Date().toLocaleString()
console.log(impura())

const MiComponente = ({miProp}) =>{
  return(
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () =>{
  return(
    <MiComponente miProp = {'hello world'} />
  )
}

export default App
