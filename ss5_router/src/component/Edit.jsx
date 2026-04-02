import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findById, updatePlayer } from "../service/PlayerService.js"; // Đảm bảo bạn có hàm updatePlayer
import { getAll as getPositionList } from "../service/PositionService.js";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

// Validation giữ nguyên như Add
const validation = Yup.object({
    playerCode: Yup.string().required("Mã cầu thủ không được để trống"),
    name: Yup.string()
        .required("Yêu cầu nhập tên")
        .min(2, "Tên quá ngắn"),
    birthday: Yup.string().required("Ngày sinh không được để trống"),
    transfer: Yup.number()
        .typeError("Giá chuyển nhượng phải là số")
        .required("Không được để trống")
        .min(0, "Giá phải là số dương"),
    position: Yup.string().required("Vị trí không được để trống")
});

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null);
    const [positionList, setPositionList] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            // 1. Lấy danh sách vị trí
            const positions = await getPositionList();
            setPositionList(positions);

            // 2. Lấy dữ liệu cầu thủ theo ID
            const playerData = await findById(id);
            if (playerData) {
                // Chuyển đổi object position thành string JSON để khớp với giá trị Field select
                setPlayer({
                    ...playerData,
                    position: JSON.stringify(playerData.position)
                });
            } else {
                toast.error("Không tìm thấy dữ liệu cầu thủ");
                navigate("/player");
            }
        };
        loadData();
    }, [id, navigate]);

    const handleUpdate = async (values) => {
        const dataToSave = {
            ...values,
            // Parse ngược lại từ string thành object trước khi gửi về API
            position: JSON.parse(values.position)
        };

        const isSuccess = await updatePlayer(id, dataToSave);
        if (isSuccess) {
            toast.success("Cập nhật thông tin thành công!");
            navigate("/player");
        } else {
            toast.error("Cập nhật thất bại!");
        }
    };

    if (!player) return <div className="text-center mt-5">Đang tải dữ liệu...</div>;

    return (
        <div className="container mt-4 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow border-0">
                        <div className="card-header bg-warning text-dark text-center py-3">
                            <h2 className="mb-0">Chỉnh sửa thông tin Cầu thủ</h2>
                        </div>
                        <div className="card-body p-4 bg-light">
                            <Formik
                                initialValues={player}
                                onSubmit={handleUpdate}
                                validationSchema={validation}
                                enableReinitialize={true} // Quan trọng: để form cập nhật khi player state thay đổi
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Mã cầu thủ (Player Code)</label>
                                        <Field type="text" name="playerCode" className="form-control" readOnly />
                                        <small className="text-muted text-secondary">Mã cầu thủ không được phép sửa.</small>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Tên Cầu thủ</label>
                                        <Field type="text" name="name" className="form-control" placeholder="Nhập tên..." />
                                        <ErrorMessage name="name" component="small" className="text-danger d-block" />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold">Ngày sinh</label>
                                            <Field type="date" name="birthday" className="form-control" />
                                            <ErrorMessage name="birthday" component="small" className="text-danger d-block" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold">Giá chuyển nhượng (Triệu $)</label>
                                            <Field type="number" name="transfer" className="form-control" />
                                            <ErrorMessage name="transfer" component="small" className="text-danger d-block" />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Vị trí thi đấu</label>
                                        <Field as="select" name="position" className="form-select">
                                            <option value="">-- Chọn vị trí --</option>
                                            {positionList.map(pos => (
                                                <option key={pos.id} value={JSON.stringify(pos)}>
                                                    {pos.position}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="position" component="small" className="text-danger d-block" />
                                    </div>

                                    <div className="mt-4 d-flex justify-content-center border-top pt-3">
                                        <button type="submit" className="btn btn-warning px-4 me-3 fw-bold">
                                            Cập nhật
                                        </button>
                                        <button type="button" onClick={() => navigate("/player")} className="btn btn-secondary px-4">
                                            Quay lại
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;