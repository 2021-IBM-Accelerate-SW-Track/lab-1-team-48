import './App.css'
import './App.css';
import Form from './component/form'
import FormList from './component/form'
import AddButton from './component/AddButton'
import Checkbox from './component/Checkbox/CheckBox'
import Tasks from './component/Tasks'
import Header from './component/header'
import Datetime from './component/Datetime'
import React, { useState } from 'react';




function App() {
  const [todoforms] = useState([
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
    <div class='App'>

      <h1>
        <Header />

      </h1>

    

      <Form />
      <FormList todoform={todoforms} />
      <Tasks />
      <Checkbox />
      <AddButton />
      <Datetime />

    </div>



  );


}



export default App;
