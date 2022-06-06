import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Form from "./components/Form";
import Peoples from "./views/Peoples";
import Planets from "./views/Planets";
import Error from "./views/Error";


function App() {


  return (
    <BrowserRouter>
    <div className="App">
      
      <h1>StarWars </h1>
      <Form />

      <Routes>
        
        {/* <Route path="/" element={<Form />} /> */}
        <Route path="" element={<> </>} />
        <Route path="/people/:id" element={<Peoples />} />
        <Route path="/planet/:id" element={<Planets />} />
        <Route path="*" element={<Error />} />


      </Routes>


    </div>
    </BrowserRouter>
  );
}

export default App;
