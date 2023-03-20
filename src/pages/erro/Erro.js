import React from "react";
import { useNavigate } from "react-router-dom";
import "./Erro.css"

function Erro(props) {

    const navigate = useNavigate()

    return (
        <div className="background">
            <section className="relative">
                {/* <div className="overlay w-full h-screen bg-gray-900 absolute z-10 opacity-75"></div> */}
                <div>
                    <h1 className="mt-16 hidden sm:block text-xl md:text-4xl xl:text-6xl capitalize text-center font-serif">
                        {props.texto}
                    </h1>

                    <hr className="hidden xl:block my-5 w-4/12 mx-auto border-orange-800" />
                </div>
                <div className="divbutton">
                    <button className="button" onClick={() => navigate(-1)}>Retroceder</button>
                </div>
            </section>
        </div>
    );
}

export default Erro;
