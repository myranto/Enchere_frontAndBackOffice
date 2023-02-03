import {Link} from "react-router-dom";
import '../../css/style.css';

export default function HomeAdmin() {
    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>


            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <h1 className="text-light"><a href="index.html">Bienvenue</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i
                                className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i
                                className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a className="nav-link scrollto active"><i
                                className="bx bx-book-content"></i><Link className="btn"
                                                                         to='/FormCategorie'>
                                <span>Ajout Categorie</span></Link></a></li>
                            <li><a className="nav-link scrollto"><i
                                className="bx bx-book-content"></i> <Link className="btn"
                                                                          to='/ListeCategorie'><span> Liste Categorie </span></Link></a>
                            </li>
                            <li><a className="nav-link scrollto"><i
                                className="bx bx-book-content"></i><Link className="btn"
                                                                         to='/dure_auction'>
                                <span>modifier default duree des encheres</span></Link></a>
                            </li>
                            <li><a className="nav-link scrollto"><i
                                className="bx bx-book-content"></i> <Link className="btn"
                                                                          to='/commission'><span>gerer commission</span></Link></a>
                            </li>
                            <li><a className="nav-link scrollto"><i
                                className="bx bx-book-content"></i><Link className="btn"
                                                                         to='/ValidationCompte'>
                                <span>liste demande de rechargement</span></Link></a></li>
                            <li><a className="nav-link scrollto"><i
                                className="bx bx-book-content"></i><Link className="btn"
                                                                         to='/getstat'><span> voir statistique </span>
                            </Link></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}