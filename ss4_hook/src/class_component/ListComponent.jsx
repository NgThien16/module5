import React, {Component} from "react";
import {getAll} from "../service/StudentService.js";
import DeleteComponent from "./DeleteComponent.jsx";

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            isShowModal: false,
            deleteStudent: {
                id: "",
                name: ""
            }
        }

    }

    componentDidMount() {
        console.log("------------didMount-------------------------------")
        this.setState(pre => (
            {
                ...pre,
                studentList: [...getAll()]
            }
        ))
    }

    handleOpenModal = (student) => {
        this.setState(pre => (
            {
                ...pre,
                isShowModal: true,
                deleteStudent: student
            }
        ))
    }
    closeModal = () => {
        this.setState(pre => (
            {
                ...pre,
                isShowModal: false,
            }
        ));
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.isShowModal!=prevState.isShowModal){
            this.setState(pre => (
                {
                    ...pre,
                    studentList: [...getAll()]
                }
            ))
        }
    }

    render() {
        return (
            <>
                {console.log("---------render-----------------")}
                <h1>Danh sách</h1>
                <table>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.studentList && this.state.studentList.map((student, i) => (
                            <tr key={student.id}>
                                <td>{i+1}</td>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>
                                    <button onClick={() => {
                                        this.handleOpenModal(student)
                                    }}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <DeleteComponent isShowModal={this.state.isShowModal}
                                 deleteStudent={this.state.deleteStudent}
                                 closeModal={this.closeModal}
                />
            </>
        )
    }
}

export default ListComponent;