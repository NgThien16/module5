import React, {useEffect, useState} from "react";
import { addNew } from "../service/PlayerService.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {getAll as getPositionList} from "../service/PositionService.js";

const validation = Yup.object({
    // id: Yup.number()
    //     .typeError("ID phải là số")
    //     .required("Yêu cầu nhập id")
    //     .min(1, "Id phải là số dương"),
    playerCode: Yup.string().required("Mã cầu thủ không được để trống"),
    name: Yup.string()
        .required("Yêu cầu nhập tên")
        .min(2, "Tên quá ngắn"),
    birthday: Yup.string().required("Ngày sinh không được để trống"),
    transfer: Yup.number()
        .typeError("Giá chuyển nhượng phải là số")
        .required("Không được để trống"),
    position: Yup.string().required("Vị trí không được để trống")
});

function Add() {
    const player = {
        id: "",
        playerCode: "",
        name: "",
        birthday: "",
        transfer: "",
        position: ""
    };

    const [positionList, setPositionList] = useState([])
    useEffect(() => {
        const fetData = async()=>{
            const data = await getPositionList();
            console.log("Dữ liệu Position:", data); // Kiểm tra xem data có phải là array không?
            setPositionList(data);
        }
        fetData();


    }, []);
    const navigate = useNavigate();

    const handleAdd = (value)=>{
        value ={
            ...value,
            position: JSON.parse(value.position)
        }
        console.log(value);
        const fetData = async ()=>{
            let isSuccess = await addNew(value);
            if (isSuccess){
                toast.success("Thêm mới thành công");
            }else {
                toast.error("Thêm mới thất bại")
            }
            navigate("/player");
        }
        fetData();
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Thêm mới Cầu thủ</h2>
            <Formik
                initialValues={player}
                onSubmit={handleAdd}
                validationSchema={validation}
            >
                <Form className="border p-4 rounded shadow-sm bg-light">
                    {/*<div className="mb-3">*/}
                    {/*    <label className="form-label">ID</label>*/}
                    {/*    <Field type="number" name="id" className="form-control" />*/}
                    {/*    <ErrorMessage name="id" component="small" className="text-danger d-block" />*/}
                    {/*</div>*/}

                    <div className="mb-3">
                        <label className="form-label">Player Code (Mã số)</label>
                        <Field type="text" name="playerCode" className="    form-control" />
                        <ErrorMessage name="playerCode" component="small" className="text-danger d-block" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Tên Cầu thủ</label>
                        <Field type="text" name="name" className="form-control" />
                        <ErrorMessage name="name" component="small" className="text-danger d-block" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ngày sinh</label>
                        <Field type="date" name="birthday" className="form-control" />
                        <ErrorMessage name="birthday" component="small" className="text-danger d-block" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Giá chuyển nhượng (Triệu $)</label>
                        <Field type="number" name="transfer" className="form-control" />
                        <ErrorMessage name="transfer" component="small" className="text-danger d-block" />
                    </div>

                    <div>
                        <Field as ={'select'} name ={'position'}>
                            <option value={''}>--------Vị Trí----------</option>
                            {
                                positionList.map(cls =>(
                                    <option key={cls.id} value={JSON.stringify(cls)}>{cls.position}</option>
                                ))
                            }
                        </Field>
                        <ErrorMessage name={'classCG'} className={'text-danger'} component={'small'}/>

                    </div>

                    <div className="mt-4">
                        <button type="submit" className="btn btn-primary me-2">Lưu cầu thủ</button>
                        <button type="button" onClick={() => navigate("/player")} className="btn btn-secondary">Hủy</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Add;