import AddTodo from "./Components/AddTodo"
import AppName from "./Components/AppName"
import Todoitem1 from "./Components/Todoitem1"
import Todoitem2 from "./Components/Todoitem2"

import "./Components/App.css";


function App() {
  

  return <center className='todo-container'>
    <AppName/>
    <AddTodo/>
    <div className="item-container"></div>
    <Todoitem1/>
    <Todoitem2/>

  </center>
    
  
}

export default App
