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
                                                    {"nome"}
                                                </td>
                                                <td className="p-3">
                                                    {"email"}
                                                </td>
                                                <td className="p-3">
                                                    {"morada"}
                                                </td>
                                                <td className="p-3">
                                                    {"cb"}
                                                </td>
                                                <td className="p-3">
                                                    {/* <a className="text-gray-400 hover:text-gray-100 mr-2">
                                                        <i className="material-icons-outlined text-base" onClick={() => navigate("/dashboard/" + data._id)}>edite</i>
                                                    </a> */}
                                                    <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                        <button className="material-icons-round text-base" onClick={() => handleClick()}>delete_inline</button>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-800" key={1}>
                                                <td className="p-3">
                                                    {"nome"}
                                                </td>
                                                <td className="p-3">
                                                    {"email"}
                                                </td>
                                                <td className="p-3">
                                                    {"morada"}
                                                </td>
                                                <td className="p-3">
                                                    {"cb"}
                                                </td>
                                                <td className="p-3">
                                                    {/* <a className="text-gray-400 hover:text-gray-100 mr-2">
                                                        <i className="material-icons-outlined text-base" onClick={() => navigate("/dashboard/" + data._id)}>edite</i>
                                                    </a> */}
                                                    <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                        <button className="material-icons-round text-base" onClick={() => handleClick()}>delete_inline</button>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-800" key={1}>
                                                <td className="p-3">
                                                    {"nome"}
                                                </td>
                                                <td className="p-3">
                                                    {"email"}
                                                </td>
                                                <td className="p-3">
                                                    {"morada"}
                                                </td>
                                                <td className="p-3">
                                                    {"cb"}
                                                </td>
                                                <td className="p-3">
                                                    {/* <a className="text-gray-400 hover:text-gray-100 mr-2">
                                                        <i className="material-icons-outlined text-base" onClick={() => navigate("/dashboard/" + data._id)}>edite</i>
                                                    </a> */}
                                                    <a className="text-gray-400 hover:text-gray-100  mx-2">
                                                        <button className="material-icons-round text-base" onClick={() => handleClick()}>delete_inline</button>
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