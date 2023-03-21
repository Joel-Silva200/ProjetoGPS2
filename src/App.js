import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listagem from "./pages/listagem/Listagem";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import TableUsers from "./components/tableusers/TableUsers";
import TableHotels from "./components/tablehotels/TableHotels";
import TableQuartos from "./components/tablequartos/TableQuartos";
import SideLeftbar from "./components/sidebar/Sidebar";
import FormHotels from "./components/formhotel/FormHotels";
import FormQuartos from "./components/formquarto/FormQuartos";
import Quarto from "./pages/quarto/Quarto";
import Erro from "./pages/erro/Erro";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<>
          <Navbar/>
          <Erro texto = {"Erro 404 : Algo correu mal!"}/>
          <Footer/>
      </>}/>
        <Route path="/" element={<Home />} />
        <Route path="/quartos/">
            <Route path="">
              <Route
                index
                element={
                  <>
                  
                    <Listagem/>

                  </>
                }
              />
            <Route path="1">
              <Route
                index
                element={
                  <>
                  
                    <Quarto />
                  
                  </>
                }
              />
            </Route>
            <Route path="2">
              <Route
                index
                element={
                  <>
                  
                    <Quarto />
                  
                  </>
                }
              />
            </Route>
            <Route path="3">
              <Route
                index
                element={
                  <>
                  
                    <Quarto />
                  
                  </>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard/">
            <Route path="">
              <Route
                index
                element={
                  <>
                  
                    <Dashboard/>
                  
                  </>
                }
              />
            <Route path="users">
              <Route
                index
                element={
                  <>
                  
                    <SideLeftbar/>
                    <TableUsers/>
                  
                  </>
                }
              />
            </Route>
            <Route path="hoteis">
              <Route
                index
                element={
                  <>
                  
                    <SideLeftbar/>
                  <TableHotels/>
                  
                  </>
                }
              />
              <Route
                path="new"
                element={
                  <>
                  
                    <FormHotels/>
                  
                  </>
                }
              />
            </Route>
            <Route path="quartos">
              <Route
                index
                element={
                  <>
                  
                    <SideLeftbar/>
                    <TableQuartos/>
                  
                  </>
                }
              />
              <Route
                path="new"
                element={
                  <>
                  
                    <FormQuartos  />
                  
                  </>
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
