import './App.css'
import React from 'react'
import {getAll} from "./service/StudentService.js";
import Header from "./component/Header.jsx";

function App() {

  return (
    <>
      <Header/>
      <h1>Danh sách</h1>
      <table>
        <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {
          getAll().map((student,i)=>(
              <tr key={student.id}>
                <td>{i}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
              </tr>
          ))
        }
        </tbody>
      </table>
    </>
  )
}

export default App
