import React, {useEffect, useState} from "react";
import {getAll} from "../service/PlayerService.js";
import Delete from "./Delete.jsx";
import Add from "./Add.jsx";

const List =()=>{

    const [playerList,setPlayerList] = useState([])
    const [deletePlayer,setDeletePlayer] = useState({
        id:"",
        playerCode: "",
        name: "",
        birthday:"",
        transfer:"",
        position:""
    })
    const [isShowModal, setIsShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setPlayerList([
            ...getAll()
        ])
    }, [isLoading]);
    const handleOpenModal =(player)=>{
        setDeletePlayer(player);
        setIsShowModal(true);
    }

    return(
        <>
        <Add setIsLoading ={setIsLoading} />
        <h1>Danh sách</h1>
        <table>
            <thead>
            <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Player Code</th>
                <th>Name</th>
                <th>Birthday</th>
                <th>Transfer</th>
                <th>Position</th>
            </tr>
            </thead>
            <tbody>
            {
                playerList && playerList.map((player, i) =>(
                <tr key={player.id}>
            <td>{i+1}</td>
            <td>{player.id}</td>
            <td>{player.playerCode}</td>
            <td>{player.name}</td>
            <td>{player.birthday}</td>
            <td>{player.transfer}</td>
            <td>{player.position}</td>
            <td>
                <button onClick={() => {
                    handleOpenModal(player)
                }}>Delete
                </button>
            </td>
            </tr>))
            }
        </tbody>
        </table>
    <Delete isShowModal={isShowModal}
            deletePlayer={deletePlayer}
            closeModal ={setIsShowModal}
            setIsLoading = {setIsLoading}
    />
</>
)
}

export default List ;