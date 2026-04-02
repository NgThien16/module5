import { Link } from "react-router-dom";
import {useState} from "react"; // Nhớ sửa thành react-router-dom

function HeaderComponent({setKey}) {
    const [input, setInput] = useState("");
    const handleSearch=(e)=>{
        e.preventDefault();
        setKey(input);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/player">
                    ⚽ Player Management
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/player">Player List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/player/add">Add New Player</Link>
                        </li>

                        {/* Dropdown menu nếu bạn cần thêm các tính năng khác */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Options
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                                <li><Link className="dropdown-item" to="/stats">Statistics</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Thanh tìm kiếm */}
                    <form className="d-flex" role="search" >
                        <input className="form-control me-2" type="search" placeholder="Search player..." aria-label="Search" value={input} onChange={(e)=>setInput(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;