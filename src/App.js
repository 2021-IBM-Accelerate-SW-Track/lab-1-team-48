import './App.css'
//import NavBar from './component/NavBar/NavBar' 
//import './App.css';
//import Example from './components/Example'
import Form from './component/Form'
import FormList from './component/Form'
//import AddButton from './components/AddButton'
import Checkbox from './component/Checkbox/CheckBox'
//import RemoveTask from './components/RemoveTask'
//import Tasks from './component/Tasks'
import Header from './component/header'
import React,{useState} from 'react';



function App() {
  const[todoforms] = useState([
  {
    id: 1,
    title: "To-do",
    isCompleted: false
  },
  {
    id: 2,
    title: "To-do",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Play",
    isCompleted: false,
  }
])
  return (
    <div class = 'App'>

    <h1>
    <Header/>
    
    </h1>
  
      <Form/>
      <FormList todoform={todoforms}/>
      
    
    </div>

  );

   
}

// //const handleCheckboxChange = event =>{
// this.setState({ checked: event.target.checked })
// return (
//   <div>
//     <div>
//       <label>
//         <Checkbox
//           checked={this.state.checked}
//           onChange={this.handleCheckboxChange}
//         />
//         <span>Label Text</span>
//       </label>
//     </div>
//     <Header />
//     <AddTask onAdd={todoforms} />
//     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete=
//       {deleteTodo} onToggle={todoforms} />) : (
//       'No Task to show'
//     )}
//   </div>
// ); }

export default App;