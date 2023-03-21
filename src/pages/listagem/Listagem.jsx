/* eslint-disable no-unused-vars */
import "./Listagem.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SearchItem from "../../components/RoomCard/RoomCard"

const List = () => {

  return (
    <div>
      <Navbar />
          <div className="listResult">
            <SearchItem/>
          </div>
      <Footer/>
    </div>
  );
};

export default List;
