import {useEffect, useState} from "react";
import Comp_List from "../../component/account_reload";
import {BaseUrl} from "../../BaseUrl";
import HomeAdmin from "./Home";
import {Footer} from "../../component/MenuCli/Footer";
import ListCatego from "../../component/catego/list";

function ValidationCompte() {
    const [list,setList] = useState(null);
    useEffect(() => {
        fetch(BaseUrl+"enchere/cli/Reload_acccount")
            .then((response) => response.json())
            .then((data) => {
                setList(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (<>
        <HomeAdmin />
        <div className="fashion_section">
            <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="container">
                        <h1>Liste des demande de rechargement </h1>
                        <table className="table table-hover" border={1}>
                            <thead>
                            <tr>
                                <th>User name</th>
                                <th>email</th>
                                <th>montant</th>

                            </tr>
                            </thead>
                            <tbody>
                            {list?.map((res)=>Comp_List(res))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                </a>
            </div>
        </div>

        <Footer />
    </>);
}


export default ValidationCompte;