/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";


const TableUsers = (props) => {

    const handleClick = async () => {
        console.log("apagar")
        };

    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead className="bg-gray-800 text-gray-500">
                                <tr>
						            <th className="p-3 text-left">Nome</th>
                                    <th className="p-3 text-left">Email</th>
						            <th className="p-3 text-left">Morada</th>
						            <th className="p-3 text-left">Contribuinte</th>
                                    <th className="p-3 text-left">Ações</th>
					            </tr>
                            </thead>
                                    <tbody>
                                            <tr className="bg-gray-800" key={1}>
                                                <td className="p-3">
                                                    {"António Silva"}
                                                </td>
                                                <td className="p-3">
                                                    {"antsilva@gmail.com"}
                                                </td>
                                                <td className="p-3">
                                                    {"Rua da Trindade Esperança n37"}
                                                </td>
                                                <td className="p-3">
                                                    {"279453455"}
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
                                            <tr className="bg-gray-800" key={1}>
                                                <td className="p-3">
                                                    {"Rodrigo Almeida"}
                                                </td>
                                                <td className="p-3">
                                                    {"almrod@gmail.com"}
                                                </td>
                                                <td className="p-3">
                                                    {"Rua Direita n52"}
                                                </td>
                                                <td className="p-3">
                                                    {"279547025"}
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
                                            <tr className="bg-gray-800" key={1}>
                                                <td className="p-3">
                                                    {"Pedro Silva"}
                                                </td>
                                                <td className="p-3">
                                                    {"pesilva@gmail.com"}
                                                </td>
                                                <td className="p-3">
                                                    {"Rua da Sagrada Conceição n4"}
                                                </td>
                                                <td className="p-3">
                                                    {"609256345"}
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
        </>
    )
}
export default TableUsers