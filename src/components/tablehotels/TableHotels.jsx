/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TableHotels.css"
const TableHotels = () => {

    const navigate = useNavigate();

    const { data } = useState({
        nome: "Teste",
        endereco: "endereco",
        cidade: "cidade",
        quartos: "quartos",
        preco: 29.99,
    });

    const handleClick = async (hotelId) => {
        console.log("apagar")
        };

    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="col-span-12">
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={() => navigate("/dashboard/hoteis/new")}>Novo Hotel</button>
                    <div className="overflow-auto lg:overflow-visible ">
                        <div className="table">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead className="bg-gray-800 text-gray-500">
                                <tr>
						            <th className="p-3">Foto</th>
						            <th className="p-3 text-left">Nome</th>
						            <th className="p-3 text-left">Endereço</th>
						            <th className="p-3 text-left">Cidade</th>
                                    <th className="p-3 text-left">ID Quartos</th>
						            <th className="p-3 text-left">Preço Mínimo</th>
                                    <th className="p-3 text-left">Ações</th>
					            </tr>
                            </thead>
                                    <tbody>
                                        {data.map(hotel => (
                                            <tr className="bg-gray-800">
                                                <td className="p-3">
                                                <div className="flex align-items-center">
                                                    <img src={hotel.fotos[0]} className='img'></img>
                                                </div> 
                                                </td>
                                                <td className="p-3">
                                                    {hotel.nome}
                                                </td>
                                                <td className="p-3">
                                                    {hotel.endereco}
                                                </td>
                                                <td className="p-3">
                                                    {hotel.cidade}
                                                </td>
                                                <td className="p-3">
                                                    {hotel.quartos.join(" | ")}
                                                </td>
                                                <td className="p-3">
                                                    {hotel.preco}€
                                                </td>
                                                <td className="p-3">
                                                    <a className="text-gray-400 hover:text-gray-100 mr-2">
                                                        <button className="material-icons-outlined text-base" onClick={() => navigate("/dashboard/hoteis/" + hotel.id)}>edite</button>
                                                    </a>
                                                    <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                        <button className="material-icons-round text-base" onClick={() => handleClick(hotel._id)}>delete_inline</button>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
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