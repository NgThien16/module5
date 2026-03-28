import { useRef} from "react";
import {addNew} from "../service/playerService.js";

function Add({setIsLoading}){
    const idRef = useRef("");
    const playerCodeRef = useRef("")
    const nameRef = useRef("");
    const birthdayRef = useRef("");
    const transferRef = useRef("");
    const positionRef = useRef("");
    const handleAdd = ()=>{
        let player = {
            id: idRef.current.value,
            playerCode: playerCodeRef.current.value,
            name:nameRef.current.value,
            birtday: birthdayRef.current.value,
            transfer: transferRef.current.value,
            position: positionRef.current.value
        }
        addNew(player);
        setIsLoading(pre=>!pre);

    }
    return(
        <>
            <form>
                <input ref={idRef} placeholder={'Enter id'}/>
                <input ref={playerCodeRef} placeholder={'Enter player code'}/>
                <input ref={nameRef} placeholder={'Enter Name'}/>
                <input ref={birthdayRef} placeholder={'Enter birthday'}/>
                <input ref={transferRef} placeholder={'Enter transfer'}/>
                <input ref={positionRef} placeholder={'Enter position'}/>
                <button onClick={handleAdd}  type={'button'}>Save</button>
            </form>
        </>
    )
}
export default Add ;