import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import List from "./component/List.jsx";
import HeaderComponent from "./class_component/HeaderComponent.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Add from "./component/Add.jsx";
import Home from "./component/Home.jsx";
import {ToastContainer} from "react-toastify";
import {useState} from "react";
import Detail from "./component/Detail.jsx";
import Edit from "./component/Edit.jsx";
import Login from "./component/Login.jsx";
function App() {
    const[keyword,setKey] = useState("");
  return (
      <>
        <HeaderComponent setKey={setKey}/>
        <Routes>
          <Route path="/" element={<Navigate to="/player" />} />
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/player'} element={<List keyword ={keyword}/>}/>
          <Route path={'/player/add'} element={<Add/>}/>
          <Route path={'/player/detail/:id'} element={<Detail/>}/>
          <Route path={'/player/edit/:id'} element={<Edit/>}/>
          <Route path={'/login'} element={<Login/>}/>
        </Routes>
          <ToastContainer/>
      </>

  );
}
export default App