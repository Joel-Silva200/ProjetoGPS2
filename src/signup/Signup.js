import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {

  const navigate = useNavigate();

  //   Handle Click Function
  const handleClick = async (e) => {
    navigate("/login")
    };
    
    return (
      <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <h1>Cria uma conta!</h1>
          <p>
            Cria a tua própria <br /> conta com os teus dados pessoais
          </p>
          <form>
            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Nome"
              id="nome"

            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="password"
              placeholder="Password"
              id="password"

            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="email"
              placeholder="Email"
              id="email"

            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Morada"
              id="morada"

            />

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Username"
              id="username"

            />  

            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Contribuinte"
              id="contribuinte"

            />

            <button onClick={handleClick}>
              Sign up
            </button>
            <button>
            <NavLink
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Já tem uma conta?
            </NavLink>
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
