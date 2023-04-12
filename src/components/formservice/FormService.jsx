import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormService = () => {

    const navigate = useNavigate()

    const [servico, setState] = useState({
        n_servico:"",
        nome: "",
        n_pessoas: "",
        preco: ""
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
        navigate("/dashboard/servicos")
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
                                    Nª do serviço*
                                </label>
                                <input
                                    type="text"
                                    id="titulo"
                                    name="titulo"
                                    value={servico.n_servico}
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
                                    Nome do serviço*
                                </label>
                                <input
                                    type="text"
                                    id="preco"
                                    name="preco"
                                    value={servico.nome}
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
                                    Pessoas a usufruir do serviço(preenchimento automatizado)
                                </label>
                                <input
                                    type="number"
                                    id="maxLotacao"
                                    name="maxLotacao"
                                    value={servico.n_pessoas}
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
                                    Preço diário do serviço*
                                </label>
                                <input
                                    type="number"
                                    id="nQuartos"
                                    name="nQuartos"
                                    value={servico.preco}
                                    onChange={setChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="divb"></div>
                        <p></p>
                        <div className="form-control">
                            <label></label>
                            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none margin-right-5px formbutton" onClick={setClick}>Adicionar Serviço</button>

                            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none formbutton" onClick={cancelar}>Cancelar</button>
                        <b>Campos com * são de preenchimento obrigatório!</b>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormService;