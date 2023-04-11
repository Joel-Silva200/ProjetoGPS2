import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listagem from "./pages/listagem/Listagem";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import TableUsers from "./components/tableusers/TableUsers";
import TableReservas from "./components/tablereservas/TableReservas";
import TableQuartos from "./components/tablequartos/TableQuartos";
import SideLeftbar from "./components/sidebar/Sidebar";
import FormHotels from "./components/formhotel/FormHotels";
import FormQuartos from "./components/formquarto/FormQuartos";
import Checkout from "./components/checkout/Checkout";
import Fatura from "./pages/fatura/Fatura"
import Quarto from "./pages/quarto/Quarto";
import Erro from "./pages/erro/Erro";
import { useState } from "react";

function App() {

  const [dados1] = useState({
    nome: "Quarto para 1",
    endereco: "esse1",
    distancia: 4.9,
    fotos: ["https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg"],
    titulo: "Quarto para 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Porttitor eget dolor morbi non arcu. Massa massa ultricies mi quis hendrerit dolor magna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Elit ut aliquam purus sit amet luctus venenatis. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Ac odio tempor orci dapibus. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Cras ornare arcu dui vivamus arcu felis. At in tellus integer feugiat scelerisque varius morbi enim. Odio eu feugiat pretium nibh. Arcu non sodales neque sodales ut etiam. Mus mauris vitae ultricies leo integer malesuada nunc vel. Dignissim suspendisse in est ante in. Etiam erat velit scelerisque in dictum.",
  })

  const [dados2] = useState({
    nome: "Quarto para 2",
    endereco: "esse2",
    distancia: 2.9,
    fotos: ["https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg"],
    titulo: "Quarto para 2",
    desc: "Orci a scelerisque purus semper. Aliquam malesuada bibendum arcu vitae elementum curabitur. Turpis egestas pretium aenean pharetra magna. Mi bibendum neque egestas congue quisque egestas. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Et sollicitudin ac orci phasellus egestas tellus. Dictum sit amet justo donec enim diam vulputate. In vitae turpis massa sed elementum tempus. Ipsum consequat nisl vel pretium lectus quam id leo in. Eu ultrices vitae auctor eu augue ut lectus. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Luctus accumsan tortor posuere ac ut consequat.",
  })

  const [dados3] = useState({
    nome: "Quarto para 4",
    endereco: "esse3",
    distancia: 1.9,
    fotos: ["https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg","https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg"],
    titulo: "Quarto para 4",
    desc: "Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Et odio pellentesque diam volutpat. Congue nisi vitae suscipit tellus mauris a. Suscipit tellus mauris a diam maecenas sed enim ut sem. Eget nunc lobortis mattis aliquam faucibus. Amet purus gravida quis blandit. Tincidunt id aliquet risus feugiat. At quis risus sed vulputate odio ut enim. Eu mi bibendum neque egestas congue. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Odio ut sem nulla pharetra diam. Tortor dignissim convallis aenean et tortor at. Ut sem viverra aliquet eget sit amet tellus cras. Augue mauris augue neque gravida in fermentum et sollicitudin. Arcu ac tortor dignissim convallis aenean et tortor at.",
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
            <Route path="4">
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
        <Route path="/faturacao" element={<Fatura />} />
        <Route path="/checkout" element={<>
          <Navbar/>
          <Checkout />
          <Footer />
        </>} />
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
            <Route path="reservas">
              <Route
                index
                element={
                  <>
                  
                    <SideLeftbar/>
                  <TableReservas/>
                  
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
