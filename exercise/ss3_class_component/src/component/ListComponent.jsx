import {Component} from "react";
import {getAll} from "../service/CustomerService.js";
import DeleteComponent from "./DeleteComponent.jsx";

class ListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerList: [],
            isShowModal: false,
            deleteCustomer: {
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
                customerList: [...getAll()]
            }
        ))
    }

    handleOpenModal = (customer) => {
        this.setState(pre => (
            {
                ...pre,
                isShowModal: true,
                deleteCustomer: customer
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
    componentDidUpdate(prevProps, prevState) {
        if (this.state.isShowModal!=prevState.isShowModal){
            this.setState(pre => (
                {
                    ...pre,
                    customerList: [...getAll()]
                }
            ))
        }
    }

    render() {
        return (
            <>
                <h1>Danh sách Khách hàng</h1>
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
                        this.state.customerList && this.state.customerList.map((customer, i) => (
                            <tr key={customer.id}>
                                <td>{i+1}</td>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>
                                    <button onClick={() => {
                                        this.handleOpenModal(customer)
                                    }}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <DeleteComponent isShowModal={this.state.isShowModal}
                                 deleteCustomer={this.state.deleteCustomer}
                                 closeModal={this.closeModal}
                />
            </>
        )
    }
}

export default ListComponent;