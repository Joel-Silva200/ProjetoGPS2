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
        <img src={"https://pesweb.azureedge.net/spimg/hotelbannerimages/pestana-sao-paulo-hotel-banner-01.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=1440&h=780&mode=crop&anchor=bottomcenter"} alt="" className="siImg" />
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
        <img src={"https://www.hoteldochiado.pt/media/hotel-do-chiado-imageLinkroom-719-61.jpg"} alt="" className="siImg" />
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
        <img src={"https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"} alt="" className="siImg" />
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
