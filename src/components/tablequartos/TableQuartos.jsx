/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useNavigate } from "react-router-dom";

const TableQuartos = () => {

    const navigate = useNavigate();

    const handleClick = async () => {
        console.log("apagar")
        };

    return(
        <>
             <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="col-span-12">
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={() => navigate("/dashboard/quartos/new")}>Novo Quarto</button>
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead className="bg-gray-800 text-gray-500">
                                <tr>
						            <th className="p-3 text-left">Título</th>
                                    <th className="p-3 text-left">Descrição</th>
						            <th className="p-3 text-left">LotacaoMax</th>
						            <th className="p-3 text-left">Preço</th>
                                    <th className="p-3 text-left">Ações</th>
					            </tr>
                            </thead>
                                    <tbody>
                                            <tr className="bg-gray-800">
                                                <td className="p-3">
                                                {"Quarto para 2"}
                                                </td>
                                                <td className="p-3">
                                                {"--"}
                                                </td>
                                                <td className="p-3">
                                                {"2"}
                                                </td>
                                                <td className="p-3">
                                                {59.99}€
                                                </td>
                                                <td className="p-3">
                                                    {/* <a className="text-gray-400 hover:text-gray-100 mr-2">
                                                        <button className="material-icons-outlined text-base" onClick={() => navigate("/dashboard/quartos/")}>edit</button>
                                                    </a> */}
                                                    <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                        <button className="material-icons-round text-base" onClick={() => handleClick()}>delete_outline</button>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-800">
                                                <td className="p-3">
                                                {"Quarto para 3"}
                                                </td>
                                                <td className="p-3">
                                                {"--"}
                                                </td>
                                                <td className="p-3">
                                                {"3"}
                                                </td>
                                                <td className="p-3">
                                                {69.99}€
                                                </td>
                                                <td className="p-3">
                                                    {/* <a className="text-gray-400 hover:text-gray-100 mr-2">
                                                        <button className="material-icons-outlined text-base" onClick={() => navigate("/dashboard/quartos/")}>edit</button>
                                                    </a> */}
                                                    <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                        <button className="material-icons-round text-base" onClick={() => handleClick()}>delete_outline</button>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-800">
                                                <td className="p-3">
                                                {"Quarto para 4"}
                                                </td>
                                                <td className="p-3">
                                                {"--"}
                                                </td>
                                                <td className="p-3">
                                                {"4"}
                                                </td>
                                                <td className="p-3">
                                                {79.99}€
                                                </td>
                                                <td className="p-3">
                                                    {/* <a className="text-gray-400 hover:text-gray-100 mr-2">
                                                        <button className="material-icons-outlined text-base" onClick={() => navigate("/dashboard/quartos/")}>edit</button>
                                                    </a> */}
                                                    <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                        <button className="material-icons-round text-base" onClick={() => handleClick()}>delete_outline</button>
                                                    </a>
                                                </td>
                                            </tr>
                                    </tbody>
                        </table>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default TableQuartos