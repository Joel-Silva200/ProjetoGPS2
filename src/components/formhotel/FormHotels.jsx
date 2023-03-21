/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const FormHotels = () => {

  const navigate = useNavigate()

  const [dados, setState] = useState({
    nome: "",
    categoria: "",
    cidade: "",
    endereco: "",
    distancia: "",
    fotos: [""],
    titulo: "",
    desc: "",
    preco: "",
  });

  const handleInputChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const setClick = async (e) => {
    // console.log("entrei no click")
    // e.preventDefault();
    // try {
    //   console.log("entrei no post")
    //       await axios.post(
    //     "https://projetobookingbackend.onrender.com/api/hoteis",
    //     dados
    //     );
    //     navigate("/dashboard/hoteis");
    //   } catch (error) {
    //     console.log(error)
    //   }
    navigate(-1)
     };

  const cancelar = () => {
    navigate("/dashboard/hoteis")
  }
  
  return (
    <>
      <div className="margens">
        <form>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Nome Hotel*
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={dados.nome}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Título*
                </label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={dados.titulo}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Categoria*
                </label>
                <input
                  type="text"
                  id="categoria"
                  name="categoria"
                  value={dados.categoria}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Cidade*
                </label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={dados.cidade}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Endereço*
                </label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={dados.endereco}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Distância*
                </label>
                <input
                  type="text"
                  id="distancia"
                  name="distancia"
                  value={dados.distancia}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Descrição*
                </label>
                <input
                  type="text"
                  id="desc"
                  name="desc"
                  value={dados.desc}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Preço Mínimo*
                </label>
                <input
                  type="text"
                  id="preco"
                  name="preco"
                  value={dados.preco}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  URL Fotos
                </label>
                <input
                  type="text"
                  id="fotos"
                  name="fotos"
                  value={dados.fotos}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="form-control">
                <label></label>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none margin-right-5px formbutton" onClick={setClick}>Adicionar Hotel</button>

                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none formbutton" onClick={cancelar}>Cancelar</button>
              <b>Campos com * são de preenchimento obrigatório!</b>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default FormHotels;
