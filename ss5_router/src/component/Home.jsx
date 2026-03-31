import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container mt-5 text-center">
            <div className="p-5 mb-4 bg-light rounded-3 border">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Hệ thống Quản lý Cầu thủ</h1>
                    <p className="col-md-8 fs-4 mx-auto">
                        Chào mừng bạn đến với ứng dụng quản lý đội bóng chuyên nghiệp.
                        Tại đây bạn có thể theo dõi danh sách, thêm mới và quản lý thông tin chuyển nhượng.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/player" className="btn btn-primary btn-lg px-4 gap-3">
                            Xem danh sách cầu thủ
                        </Link>
                        <Link to="/player/add" className="btn btn-outline-secondary btn-lg px-4">
                            Thêm cầu thủ mới
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <h2>Dễ dàng quản lý</h2>
                    <p>Giao diện trực quan giúp bạn nắm bắt thông tin đội bóng chỉ trong vài giây.</p>
                </div>
                <div className="feature col">
                    <h2>Chính xác</h2>
                    <p>Dữ liệu được cập nhật thời gian thực thông qua hệ thống API ổn định.</p>
                </div>
                <div className="feature col">
                    <h2>Bảo mật</h2>
                    <p>Thông tin chuyển nhượng và hợp đồng cầu thủ được bảo mật an toàn.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;