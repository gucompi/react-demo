import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/navbar.component';
import Table from './Table/table.component';
import {useState} from 'react';
import Form from './Form/form.component';
import { Routes, Route } from "react-router-dom";


function App() {

  const [users, setUsers] = useState([
    {
        First:"Gustavo",
        Last:"Compiano",
        Handler:"@gucompi"
    },{
        First:"Agus",
        Last:"Klaich",
        Handler:"@agusKlaich"
    }
]);
   const handleSubmitForm = (data)=>{
    console.log("hola desde handleSubmitForm", data)
    setUsers([...users,data])
   }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
       <Route path="/" element={<Table users={users}/>} />
       <Route path="/form" element={<Form handleSubmitForm={handleSubmitForm}></Form>} />
      </Routes>
    </div>
  );
}

export default App;
