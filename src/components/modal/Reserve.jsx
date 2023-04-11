import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reserve.css";

const Reserve = ({ setOpen, quartoId }) => {
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
    navigate("/checkout")
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span></span>

          <div className="rItem" key={1}>
            <div className="rItemInfo">
              <div className="rTitle">Quarto {quartoId}01</div>
              <div className="rDesc">Quarto para {quartoId}</div>
              <div className="rMax">
                Serviços adicionais (ao dia): <b>{5.99}€</b>
              </div>
            </div>
            <div className="rSelectRooms">

                <div className="room">
                  <label>{"Spa"}</label>
                  <input
                    type="checkbox"
                    value={1}
                    onChange={handleSelect}
                  />
                </div>
                <div className="room">
                  <label>{"Ginásio"}</label>
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
