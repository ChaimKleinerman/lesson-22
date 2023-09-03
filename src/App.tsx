import './App.css'
import Counter from './components/Counter'
import StyleChange from './components/StyleChange'
import { PropsSquare } from './components/Type'

const myStyle:PropsSquare = {square1:{
    width:'200px',
    height:'200px',
    backgroundColor: "blue",
    color:'wight',
    border:'10px'
},
 square2:{
    width:'200px',
    height:'200px',
    backgroundColor: "red",
    color:'wight',
    border:'10px'
}}

function App() {

  return (
    <div id='container'>
      <Counter/>
      <StyleChange {...myStyle}/>
    </div>
  )
}

export default App

