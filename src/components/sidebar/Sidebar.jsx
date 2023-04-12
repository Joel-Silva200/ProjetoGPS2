/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

const SideLeftbar = () => {

  return (
    <>
     <div className="area"></div><nav className="main-menu">
            <ul>
                <li className="has-subnav">
                    <Link to={"/dashboard/users"}>
                        <i className="fa fa-user fa-2x"></i>
                        <span className="nav-text">
                            Users
                        </span>
                    </Link>
                </li>
                <li className="has-subnav">
                    <Link to={"/dashboard/Reservas"}>
                       <i className="fa fa-file fa-2x"></i>
                        <span className="nav-text">
                            Reservas
                        </span>
                    </Link>
                    
                </li>
                <li className="has-subnav">
                    <Link to={"/dashboard/quartos"}>
                       <i className="fa fa-bed fa-2x"></i>
                        <span className="nav-text">
                            Quartos
                        </span>
                    </Link>
                </li>
                <li className="has-subnav">
                    <Link to={"/dashboard/servicos"}>
                       <i className="fa fa-bell fa-2x"></i>
                        <span className="nav-text">
                            Servicos
                        </span>
                    </Link>
                </li>
            </ul>

            <ul className="logout">
                <li>
                    <Link to={"/"}>
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Voltar
                        </span>
                    </Link>
                </li>  
            </ul>
        </nav>
    </>
  );
};
export default SideLeftbar