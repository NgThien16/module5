import React, {useEffect, useState} from "react";
import {getAll} from "../service/PlayerService.js"
import {Link} from "react-router-dom";
import Delete from "./Delete.jsx";

const List = () => {

    const [playerList, setPlayerList] = useState([]);
    const [deletePlayer, setDeletePlayer] = useState({
        id: "",
        playerCode: "",
        name: "",
        birthday: "",
        transfer: "",
        position: ""
    });
    const [isShowModal, setIsShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetData = async () => {
            try {
                const listPlayer = await getAll();
                setPlayerList(listPlayer);
            } catch (e) {
                console.error(e);
            }
        }
        fetData();
    }, [isLoading]);

    const handleOpenModal = (player) => {
        setDeletePlayer(player);
        setIsShowModal(true);
    }

    return (
        <div className="container mt-4">

            <Link to={'/player/add'}>Thêm mới</Link>

            <h2 className="text-center mb-4">Danh sách Player</h2>

            <table className="table table-bordered table-hover text-center">
                <thead className="table-dark">
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Player Code</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Transfer</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {
                    playerList && playerList.map((player, i) => (
                        <tr key={player.id}>
                            <td>{i + 1}</td>
                            <td>{player.id}</td>
                            <td>{player.playerCode}</td>
                            <td>{player.name}</td>
                            <td>{player.birthday}</td>
                            <td>{player.transfer}</td>
                            <td>
                                {player.position?.position}
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleOpenModal(player)}
                                >
                                    Delete
                                </button>
                                <Link to={`/student/detail/${player.id}`}>Detail</Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <Delete
                isShowModal={isShowModal}
                deletePlayer={deletePlayer}
                closeModal={setIsShowModal}
                setIsLoading={setIsLoading}
            />
        </div>
    )
}

export default List;