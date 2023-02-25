import {Link} from "react-router-dom";
import {useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import {ResultSimpleSearch} from "../../component/ResutSearch";
// import '../../css/style.css';

const style = {
    // background:"red"
    "background-color": "#f26522",
    "border-color":"#f26522"
}
const header={
    "background-color":"#FEC50F"
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
export default function HomeAdmin() {
    const [key,setKey] = useState("");
    const [response,setResponse] = useState(null);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        // const   keyWord = form.elements.namedItem('keyWord').value;
        const json = {
            "date_min" : null,
            "date_max" : null,
            "keyWord" : key,
            "categorie" : null,
            "status" : -1,
            "prix" : -1
        };
        fetch(
            BaseUrl+"enchere/cli/search",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json),
            }
        )
            .then((response) => response.json())
            .then((res) => {
                // localStorage.setItem("list",JSON.stringify(res.data))
                // console.log(res.data)
                setResponse(res.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <>
            {response===null &&
                <>
            <div style={header} className="banner_bg_main">
                  {/*header top section start */}
                <div className="container">
                    <div className="header_section_top">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="custom_menu">
                                    <ul>
                                        <li><a href="#">Best Sellers</a></li>
                                        <li><a href="#">Gift Ideas</a></li>
                                        <li><a href="#">New Releases</a></li>
                                        <li><a href="#">Today's Deals</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="logo_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">

                                <div className="logo"><h1  >Vente aux enchere </h1></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_section">
                    <div className="container">
                        <div className="containt_main">
                            <div id="mySidenav" className="sidenav">
                                {/*<a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>*/}
                                <a href={"#"} onClick={closeNav} className="closebtn" >&times;</a>

                                <a href="/ListeCategorie">Liste categorie</a>
                                <a href="/dure_auction">gestion default duree des encheres</a>
                                <a href="/commission">gestion commission</a>
                                <a href="/ValidationCompte">gestion demande rechargement</a>
                                <a href="/getstat">statistique</a>
                            </div>

                            {/*<span className="toggle_icon" onClick="openNav()"><img src="images/toggle-icon.png" /></span>*/}
                            <span className="toggle_icon" onClick={openNav} ><img src={process.env.PUBLIC_URL + '/images/toggle-icon.png'} /></span>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">action
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/ListeCategorie">categories</a>
                                    <a className="dropdown-item" href="/ValidationCompte">demande rechargement</a>
                                    <a className="dropdown-item" href="/dure_auction">default duration auction</a>
                                    <a className="dropdown-item" href="/commission">default commission auction</a>
                                    <a className="dropdown-item" href="/getstat">statistiques</a>
                                </div>
                            </div>
                            <div className="main">
                                <div className="input-group">
                                    <input type="text" className="form-control" onChange={(event) => setKey(event.target.value)} placeholder="Search auction here" />
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary" onClick={handleSubmit} type="button"
                                                    style={style}>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                </div>
                            </div>
                            <div className="header_box">
                                <div className="lang_box ">
                                    <a href="#" title="Language" className="nav-link" data-toggle="dropdown"
                                       aria-expanded="true">
                                        <img src={process.env.PUBLIC_URL + '/images/flag-uk.png'} alt="flag" className="mr-2 "
                                             title="United Kingdom"/> English <i className="fa fa-angle-down ml-2"
                                                                                aria-hidden="true"></i>
                                    </a>
                                    <div className="dropdown-menu ">
                                        <a href="#" className="dropdown-item">
                                            <img src="images/flag-france.png" className="mr-2" alt="flag" />
                                                French
                                        </a>
                                    </div>
                                </div>
                                <div className="login_menu">
                                    <ul>
                                        <li><a href="#">
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <span className="padding_10">Cart</span></a>
                                        </li>
                                        <li><a href="#">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span className="padding_10">Cart</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner_section layout_padding">
                    <div className="container">
                        <div id="my_slider" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">Get Start <br />Your favriot auction</h1>
                                            <div className="buynow_bt"><a href="#">Bid Now</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                                            <div className="buynow_bt"><a href="#">Bid Now</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                                            <div className="buynow_bt"><a href="#">Bid Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                    </>}
            {response!==null
                &&
                <>
                    <ResultSimpleSearch list={response} />
                </>
            }
        </>
    );
}