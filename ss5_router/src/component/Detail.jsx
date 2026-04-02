import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {findById} from "../service/PlayerService.js";

const Detail=()=>{
    const [player,setPlayer] =useState({});
    const {id} = useParams();
    useEffect(() => {
        const fetchData = async ()=>{
            setPlayer(await findById(id))
        }
        fetchData();
    }, []);
    return(
        <>
            <h1>Thông tin chi tiết</h1>
            <p>Mã cầu thủ: {player?.playerCode}</p>
            <p>Tên:{player?.name} </p>
            <p>Ngày Sinh:{player?.birthday} </p>
            <p>Giá trị chuyển nhượng:{player?.transfer} </p>
            <p>Vị trí: {player?.position?.position} </p>
        </>
    )
}
export default Detail;