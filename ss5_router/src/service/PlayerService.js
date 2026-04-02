
import axios from "axios";
const BE_URL = "http://localhost:8080"
export async function getAll(keyword=""){
    try{
        const res = await axios.get(`${BE_URL}/player?name_like=${keyword}`)
        return res.data;
    }catch (e){
        console.log(e)
    }
    return [];
}
export async function deleteById(id){
    try{
        const res = await axios.delete(`${BE_URL}/player/${id}`)
        if (res.status=="200"){
            return true;
        }
    }catch (e){
        console.log(e)
    }
    return false;
}
export async function findById(id){
    try{
        const res = await axios.get(`${BE_URL}/player/${id}`)
        return res.data;
    }catch (e){
        console.log(e)
    }
    return null;
}
export async function addNew(player){
    try{
        const res = await axios.post(`${BE_URL}/player  `,player)
        if (res.status=="201"){
            return true;
        }
    }catch (e){
        console.log(e)
    }
    return false;

}
export async  function updatePlayer(id, player){
    try{
        const res = await axios.put(`${BE_URL}/player/${id}`,player);
        return res.status === 200;
    }catch (e){
        console.log(e)
    }
    return false
}