import {Link} from "react-router-dom";
// import '../../css/stylee.css';
import '../../css/style2.css';

export default function HomeCli() {
const style = {
    color:'black'
}
    return (
        <>
            <div id="header">
                <div className="container-scroller">
                    <div className="row p-0 m-0 proBanner" id="proBanner">
                        <div className="col-md-12 p-0 m-0">
                            <div className="card-body card-body-padding d-flex align-items-center justify-content-between">
                                <div className="ps-lg-1">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-2 font-weight-normal mt-4 buy-now-text">AUCTION CLI</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <a href="https://www.bootstrapdash.com/product/purple-bootstrap-admin-template/"><i
                                        className="mdi mdi-home me-3 text-white"></i></a>
                                    <button id="bannerClose" className="btn border-0 p-0">
                                        <i className="mdi mdi-close text-white me-0"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">

                        <div className="navbar-menu-wrapper d-flex align-items-stretch">
                            <button className="navbar-toggler navbar-toggler align-self-center" type="button"
                                    data-toggle="minimize">
                                <span className="mdi mdi-menu"></span>
                            </button>
                            <div className="search-field d-none d-md-block">

                            </div>
                            <ul className="navbar-nav navbar-nav-right">
                            </ul>
                            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                                    type="button" data-toggle="offcanvas">
                                <span className="mdi mdi-menu"></span>
                            </button>
                        </div>
                    </nav>

                    <div className="container-fluid page-body-wrapper">

                        <nav className="sidebar sidebar-offcanvas" id="sidebar">
                            <ul className="nav">
                                <li className="nav-item nav-profile">
                                    <a className="nav-link">

                                        <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                                    </a>
                                </li>
                                <li className="nav-item sidebar-actions">
              <span className="nav-link">

                <a className="btn btn-block btn-lg btn-primary mt-4"><Link style={style}
                                                                                     to='/Historique'>
                            <span>Historique</span></Link></a>

                <div className="mt-4">

                  <ul className="gradient-bullet-list mt-4">
                    <li>..</li>
                    <li>..</li>
                  </ul>
                </div>
              </span>
                                    <span className="nav-link">

                <a className="btn btn-block btn-lg btn-primary mt-4"><Link style={style}
                                                                                     to='/ListeEnchere'>
                            <span>Liste des Enchères</span></Link></a>

                <div className="mt-4">

                  <ul className="gradient-bullet-list mt-4">
                    <li>..</li>
                    <li>.</li>
                  </ul>
                </div>
              </span>
                                    <span className="nav-link">

                <a className="btn btn-block btn-lg btn-primary mt-4"><Link style={style}
                                                                                     to='/RechercheAvance'>
                            <span>Recherche avance</span></Link></a>

                <div className="mt-4">

                  <ul className="gradient-bullet-list mt-4">
                    <li>..</li>
                    <li>.</li>
                  </ul>
                </div>
              </span>
                                    <span className="nav-link">

                <a className="btn btn-block btn-lg btn-primary mt-4"><Link style={style}
                                                                                     to='/Login'>
                            <span>Se conecter</span></Link></a>

                <div className="mt-4">

                  <ul className="gradient-bullet-list mt-4">
                    <li>..</li>
                    <li>..</li>
                  </ul>
                </div>
              </span>
                <span className="nav-link">

                <a className="btn btn-block btn-lg btn-primary mt-4"><Link style={style}
                                                                                     to='/logout'>
                            <span>log out</span></Link></a>

                <div className="mt-4">

                  <ul className="gradient-bullet-list mt-4">
                    <li>..</li>
                    <li>..</li>
                  </ul>
                </div>
              </span>
                                </li>
                            </ul>
                        </nav>

                        <div className="main-panel">
                            <div className="content-wrapper">
                                <div className="page-header">


                                </div>
                                <div className="row">


                                </div>
                                <div className="row">
                                </div>
                                <footer className="footer">
                                    <div className="container-fluid d-flex justify-content-between">

                                        <span  className="text-muted d-block text-center text-sm-start d-sm-inline-block">Copyright © bootstrapdash.com 2021</span>

                                    </div>
                                </footer>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}