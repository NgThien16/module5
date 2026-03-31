import React, { useState } from "react";
import { addNew } from "../service/playerService.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

// 1. Đưa Validation Schema ra ngoài để tối ưu hiệu suất
const validation = Yup.object({
    id: Yup.number()
        .typeError("ID phải là số")
        .required("Yêu cầu nhập id")
        .min(1, "Id phải là số dương"),
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
    const navigate = useNavigate();

    // Giá trị khởi tạo khớp với Schema
    const initialPlayer = {
        id: "",
        playerCode: "",
        name: "",
        birthday: "",
        transfer: "",
        position: ""
    };

    const handleAdd = async (values) => {
        try {
            console.log("Dữ liệu gửi đi:", values);
            await addNew(values); // Đợi lưu xong
            toast.success("Thêm mới thành công!");
            navigate("/player");
        } catch (error) {
            toast.error("Có lỗi xảy ra!");
            console.error(error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Thêm mới Cầu thủ</h2>
            <Formik
                initialValues={initialPlayer}
                onSubmit={handleAdd}
                validationSchema={validation}
            >
                <Form className="border p-4 rounded shadow-sm bg-light">
                    <div className="mb-3">
                        <label className="form-label">ID</label>
                        <Field type="number" name="id" className="form-control" />
                        <ErrorMessage name="id" component="small" className="text-danger d-block" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Player Code (Mã số)</label>
                        <Field type="text" name="playerCode" className="form-control" />
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

                    <div className="mb-3">
                        <label className="form-label">Vị trí</label>
                        <Field as="select" name="position" className="form-select">
                            <option value="">-- Chọn vị trí --</option>
                            <option value="Striker">Striker</option>
                            <option value="Midfielder">Midfielder</option>
                            <option value="Defender">Defender</option>
                            <option value="Goalkeeper">Goalkeeper</option>
                        </Field>
                        <ErrorMessage name="position" component="small" className="text-danger d-block" />
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