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
        <img src={""} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{"Quarto para 2"}</h1>
          <span></span>
          <span>
          </span>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{" essa cidade"}</span>
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
        <img src={""} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{"Quarto para 2"}</h1>
          <span></span>
          <span>
          </span>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{" essa cidade"}</span>
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
            <Link to={`/quartos/2`}>
              <button className="siCheckButton">Ver disponibilidade</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img src={""} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{"Quarto para 2"}</h1>
          <span></span>
          <span>
          </span>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{" essa cidade"}</span>
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
            <Link to={`/quartos/3`}>
              <button className="siCheckButton">Ver disponibilidade</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
