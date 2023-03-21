import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reserve.css";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {

  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Selecione os seus quartos:</span>

          <div className="rItem" key={1}>
            <div className="rItemInfo">
              <div className="rTitle">{"Quarto 201"}</div>
              <div className="rDesc">{"Quarto para 2"}</div>
              <div className="rMax">
                Nº máximo de pessoas: <b>{2}</b>
              </div>
              <div className="rPrice">{49.99}€</div>
            </div>
            <div className="rSelectRooms">

                <div className="room">
                  <label>{201}</label>
                  <input
                    type="checkbox"
                    value={1}
                    onChange={handleSelect}
                  />
                </div>

            </div>
          </div>

        <button onClick={handleClick} className="rButton">
          Reserve Agora!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
