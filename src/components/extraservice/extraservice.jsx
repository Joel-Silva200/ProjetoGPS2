/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./extraservice.css"
const Tableservice = () => {

    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                        <div className="table">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead className="bg-gray-800 text-gray-500">
                                <tr>
						            <th className="p-3 text-left">Nome do Serviço</th>
                                    <th className="p-3 text-left">Nº de Pessoas Registadas</th>
                                    <th className="p-3 text-left">Preço do Serviço ao Dia</th>
                                    <th className="p-3 text-left">Ações</th>
					            </tr>
                            </thead>
                                    <tbody>
                                        <tr className="bg-gray-800">
                                            <td className="p-3">
                                                {"Ginásio"}
                                            </td>
                                            <td className="p-3">
                                                {"7"}
                                            </td>
                                            <td className="p-3">
                                                {"5.99"}
                                            </td>
                                            <td className="p-3">
                                            <a className="text-gray-400 hover:text-gray-100 mr-2">
                                                        <button className="material-icons-outlined text-base">edit</button>
                                                    </a>
                                                    <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                        <button className="material-icons-round text-base">delete_inline</button>
                                                    </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-800">
                                            <td className="p-3">
                                                {"Spa"}
                                            </td>
                                            <td className="p-3">
                                                {"11"}
                                            </td>
                                            <td className="p-3">
                                                {"5.99"}
                                            </td>
                                            <td className="p-3">
                                            <a className="text-gray-400 hover:text-gray-100 mr-2">
                                                        <button className="material-icons-outlined text-base">edit</button>
                                                    </a>
                                                    <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                        <button className="material-icons-round text-base">delete_inline</button>
                                                    </a>
                                            </td>
                                        </tr>
                                    </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Tableservice