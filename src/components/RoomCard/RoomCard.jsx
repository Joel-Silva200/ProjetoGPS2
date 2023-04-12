import "./RoomCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const SearchItem = () => {
  return (
    <>
      <div className="searchItem">
        <img src={"https://images.trvl-media.com/lodging/13000000/12330000/12321000/12320998/4016989c.jpg?impolicy=resizecrop&rw=1200&ra=fit"} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{"Quarto para 1"}</h1>
          <span></span>
          <span>
          </span>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{"1º andar"}</span>
          </div>
          <span></span>
          <span></span>
          <span className="siCancelOp">Cancelamento grátis! </span>
          <span className="siCancelOpSubtitle">
            Pode cancelar mais tarde, por isso aproveite!
          </span>
        </div>
        <div className="siDetails">
          <div className="siDetailTexts">
            <span className="siPrice">Desde {59.99}€</span>
            <Link to={`/quartos/1`}>
              <button className="siCheckButton">Ver disponibilidade</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img src={"https://media-cdn.tripadvisor.com/media/photo-s/06/ff/22/d4/dolphin-hotel.jpg"} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{"Quarto para 2"}</h1>
          <span></span>
          <span>
          </span>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{"2º andar"}</span>
          </div>
          <span></span>
          <span></span>
          <span className="siCancelOp">Cancelamento grátis! </span>
          <span className="siCancelOpSubtitle">
            Pode cancelar mais tarde, por isso aproveite!
          </span>
        </div>
        <div className="siDetails">
          <div className="siDetailTexts">
            <span className="siPrice">Desde {69.99}€</span>
            <Link to={`/quartos/2`}>
              <button className="siCheckButton">Ver disponibilidade</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img src={"https://media-cdn.tripadvisor.com/media/photo-s/0a/22/f5/de/piscina-quarto-externo.jpg"} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{"Quarto para 4"}</h1>
          <span></span>
          <span>
          </span>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{"3º andar"}</span>
          </div>
          <span></span>
          <span></span>
          <span className="siCancelOp">Cancelamento grátis! </span>
          <span className="siCancelOpSubtitle">
            Pode cancelar mais tarde, por isso aproveite!
          </span>
        </div>
        <div className="siDetails">
          <div className="siDetailTexts">
            <span className="siPrice">Desde {79.99}€</span>
            <Link to={`/quartos/4`}>
              <button className="siCheckButton">Ver disponibilidade</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
