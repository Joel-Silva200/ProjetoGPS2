import "./quarto.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Reserve from "../../components/modal/Reserve";
import DatePicker from "../../components/datepicker/DatePicker";
import PeopleAmount from "../../components/peopleAmount/peopleAmount"

const Hotel = (props) => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  //
  // função para image slider

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  
  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <Navbar />
        <>
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="close"
                  onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="arrow"
                  onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper">
                  <img
                    src={props.fotos[slideNumber]}
                    alt=""
                    className="sliderImg"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow"
                  onClick={() => handleMove("r")}
                />
              </div>
            )}
            <div className="hotelWrapper">
              <h1 className="hotelTitle">{props.nome}</h1>
              <div className="hotelImages">
                {props.fotos?.map((foto, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={foto}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{props.titulo}</h1>
                  <p className="hotelDesc">{props.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <PeopleAmount></PeopleAmount>
                  <DatePicker handleclick = {handleClick}></DatePicker>
                </div>
              </div>
            </div>
          </div>
        </>
      {openModal && <Reserve setOpen={setOpenModal} quartoId={id} />}
      <Footer />
    </div>
  );
};

export default Hotel;
