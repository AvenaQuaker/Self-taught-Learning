import HomeIcon from "../Resources/Home.png";
import CircleChartIcon from "../Resources/Circle Chart.png";
import LogoIcon from "../Resources/Logo.png";

function Sidebar({ VerificarPagina, currentPage }) {
    const handlePageChange = (page) => {
        VerificarPagina(page);
    };

    return (
        <div className="sidebar">
            <label className="sidebarTitle">Dashboard</label>
            <label id="subtitle">Menu</label>
            <div
                className="page"
                id="page1"
                onClick={() => handlePageChange(1)}
                style={{
                    color: currentPage === 1 ? "white" : "grey",
                    fontWeight: currentPage === 1 ? "bold" : "normal",
                }}>
                <div
                    className="pageIMG"
                    id="pageIMG1"
                    style={{
                        background: currentPage === 1 ? "orange" : "#3f3f3f",
                    }}>
                    <img
                        src={HomeIcon}
                        id="pimg1"
                        alt="Home"
                        style={{
                            filter:
                                currentPage === 1 ? "invert(1)" : "invert(0.5)",
                        }}
                    />
                </div>
                <label className="pageLabel" id="plabel1">
                    CRUD
                </label>
            </div>
            <div
                className="page"
                id="page2"
                onClick={() => handlePageChange(2)}
                style={{
                    color: currentPage === 2 ? "white" : "grey",
                    fontWeight: currentPage === 2 ? "bold" : "normal",
                }}>
                <div
                    className="pageIMG"
                    id="pageIMG2"
                    style={{
                        background: currentPage === 2 ? "lightBlue" : "#3f3f3f",
                    }}>
                    <img
                        src={CircleChartIcon}
                        id="pimg2"
                        alt="Circle Chart"
                        style={{
                            filter:
                                currentPage === 2 ? "invert(1)" : "invert(0.5)",
                        }}
                    />
                </div>
                <label className="pageLabel" id="plabel2">
                    Graficas
                </label>
            </div>
            <img
                src={LogoIcon}
                id="Logo"
                alt="Logo"
                onClick={() => Loading("PaginaPrincipal.html")}
            />
        </div>
    );
}

export default Sidebar;
