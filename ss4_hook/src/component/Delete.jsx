import {Button, Modal} from "react-bootstrap";
import {deleteById} from "../service/PlayerService.js";

function Delete({isShowModal, deletePlayer, closeModal, setIsLoading}){
    const handleClose =()=>{
        closeModal(false);
    }
    const handleDelete =()=>{
        deleteById(deletePlayer.id)
        closeModal(false);
        setIsLoading(pre=>!pre)
    }
    return(
        <>
            <Modal show={isShowModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Bạn có muốn xoá cầu thủ : {deletePlayer.name}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Delete;