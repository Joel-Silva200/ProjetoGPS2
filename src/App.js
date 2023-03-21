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
import { useState } from "react";

function App() {

  const [dados1] = useState({
    nome: "Esse1",
    endereco: "esse1",
    distancia: 4.9,
    fotos: ["https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg"],
    titulo: "Esse1",
    desc: "eqwjeiqjewjiqjeiqjiejwqie aw diawond iuawn uawi dnaiwu nduiawn uinaiu ndwiu nuian nauinwui dnuiniu niaunw diunaiu nuainw undawu innauwn iua uiawndui nawiu nuai uwdnuian uanwiu dnuawn iunaudaduawduahid hauiw hdiuawh iuahidu hwiau hduiah iuwah",
  })

  const [dados2] = useState({
    nome: "Esse2",
    endereco: "esse2",
    distancia: 2.9,
    fotos: ["https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg"],
    titulo: "Esse2",
    desc: "eqwjeiqjewjiqjeiqjiejwqie aw diawond iuawn uawi dnaiwu nduiawn uinaiu ndwiu nuian nauinwui dnuiniu niaunw diunaiu nuainw undawu innauwn iua uiawndui nawiu nuai uwdnuian uanwiu dnuawn iunaudaduawduahid hauiw hdiuawh iuahidu hwiau hduiah iuwah",
  })

  const [dados3] = useState({
    nome: "Esse3",
    endereco: "esse3",
    distancia: 1.9,
    fotos: ["https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg"],
    titulo: "Esse3",
    desc: "eqwjeiqjewjiqjeiqjiejwqie aw diawond iuawn uawi dnaiwu nduiawn uinaiu ndwiu nuian nauinwui dnuiniu niaunw diunaiu nuainw undawu innauwn iua uiawndui nawiu nuai uwdnuian uanwiu dnuawn iunaudaduawduahid hauiw hdiuawh iuahidu hwiau hduiah iuwah",
  })

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
                  
                    <Quarto nome = {dados1.nome} endereco = {dados1.endereco} distancia = {dados1.distancia} fotos = {dados1.fotos} titulo = {dados1.titulo} desc = {dados1.desc} />
                  
                  </>
                }
              />
            </Route>
            <Route path="2">
              <Route
                index
                element={
                  <>
                  
                  <Quarto nome = {dados2.nome} endereco = {dados2.endereco} distancia = {dados2.distancia} fotos = {dados2.fotos} titulo = {dados2.titulo} desc = {dados2.desc} />
                  
                  </>
                }
              />
            </Route>
            <Route path="3">
              <Route
                index
                element={
                  <>
                  
                  <Quarto nome = {dados3.nome} endereco = {dados3.endereco} distancia = {dados3.distancia} fotos = {dados3.fotos} titulo = {dados3.titulo} desc = {dados3.desc} />
                  
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
