import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import List from "./component/List.jsx";
import HeaderComponent from "./class_component/HeaderComponent.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Add from "./component/Add.jsx";
import Home from "./component/Home.jsx";
import {ToastContainer} from "react-toastify";
function App() {
  return (
      <>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<Navigate to="/player" />} />
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/player'} element={<List/>}/>
          <Route path={'/player/add'} element={<Add/>}/>
        </Routes>
          <ToastContainer/>
      </>

  );
}
export default App