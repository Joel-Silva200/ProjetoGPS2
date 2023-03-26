import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormQuartos = () => {

    const navigate = useNavigate()

    const [quarto, setState] = useState({
        titulo: "",
        preco: "",
        maxLotacao: "",
        descricao: "",
        idhotel:"",
        nQuartos:[""],
    });

    const setChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const setClick = async (e) => {
        // e.preventDefault();
        // try {
        //     await axios.post(
        //     "https://projetobookingbackend.onrender.com/api/quartos/"+quarto.idhotel,
        //     quarto
        //     );
        //     navigate("/dashboard/quartos");
        // } catch (error) {
        //     console.log(error)
        // }
        navigate(-1)
        };

    const cancelar = () => {
        navigate("/dashboard/quartos")
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
                                    Nome Quarto*
                                </label>
                                <input
                                    type="text"
                                    id="titulo"
                                    name="titulo"
                                    value={quarto.titulo}
                                    onChange={setChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Preço*
                                </label>
                                <input
                                    type="text"
                                    id="preco"
                                    name="preco"
                                    value={quarto.preco}
                                    onChange={setChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Lotação Máxima*
                                </label>
                                <input
                                    type="number"
                                    id="maxLotacao"
                                    name="maxLotacao"
                                    value={quarto.maxLotacao}
                                    onChange={setChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Número de Quarto*
                                </label>
                                <input
                                    type="number"
                                    id="nQuartos"
                                    name="nQuartos"
                                    value={quarto.nQuartos}
                                    onChange={setChange}
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
                                    id="descricao"
                                    name="descricao"
                                    value={quarto.descricao}
                                    onChange={setChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="divb"></div>
                        <p></p>
                        <div className="form-control">
                            <label></label>
                            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none margin-right-5px formbutton" onClick={setClick}>Adicionar Quarto</button>

                            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none formbutton" onClick={cancelar}>Cancelar</button>
                        <b>Campos com * são de preenchimento obrigatório!</b>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormQuartos;