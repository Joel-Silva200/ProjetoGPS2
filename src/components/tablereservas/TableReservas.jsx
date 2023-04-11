/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./TableReservas.css"
const TableHotels = () => {

    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                        <div className="table">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead className="bg-gray-800 text-gray-500">
                                <tr>
						            <th className="p-3 text-left">Nº Reserva</th>
						            <th className="p-3 text-left">Cliente</th>
                                    <th className="p-3 text-left">Nº Quarto</th>
						            <th className="p-3 text-left">Serviços Extra</th>
                                    <th className="p-3 text-left">Ações</th>
					            </tr>
                            </thead>
                                    <tbody>
                                        <tr className="bg-gray-800">
                                            <td className="p-3">
                                                {"132123"}
                                            </td>
                                            <td className="p-3">
                                                {"António Silva"}
                                            </td>
                                            <td className="p-3">
                                                {"202"}
                                            </td>
                                            <td className="p-3">
                                                {"Spa"}
                                            </td>
                                            <td className="p-3">
                                                <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                    <button className="material-icons-round text-base">delete_inline</button>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-800">
                                            <td className="p-3">
                                                {"132124"}
                                            </td>
                                            <td className="p-3">
                                                {"Pedro Silva"}
                                            </td>
                                            <td className="p-3">
                                                {"304"}
                                            </td>
                                            <td className="p-3">
                                                {"-"}
                                            </td>
                                            <td className="p-3">
                                                <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                    <button className="material-icons-round text-base">delete_inline</button>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-800">
                                            <td className="p-3">
                                                {"132125"}
                                            </td>
                                            <td className="p-3">
                                                {"Rodrigo Almeida"}
                                            </td>
                                            <td className="p-3">
                                                {"201"}
                                            </td>
                                            <td className="p-3">
                                                {"Ginásio, Spa"}
                                            </td>
                                            <td className="p-3">
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

export default TableHotels