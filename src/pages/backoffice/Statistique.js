import {useEffect, useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import zanaka from "../../component/comStat";
import HomeAdmin from "./Home";
import {Footer} from "../../component/MenuCli/Footer";
import Comp_List from "../../component/account_reload";


export default function Statistique() {
    const [stat, setStat] = useState(null);
    useEffect(() => {
        fetch(BaseUrl + "enchere/stat/select")
            .then((response) => response.json())
            .then((data) => {
                setStat(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <HomeAdmin />
            <div className="fashion_section">
                <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="container">
                            <h1>statistiques des encheres</h1>
                            <table className="table table-hover" border={1}>
                                <thead>
                                <tr>
                                    <th>categorie</th>
                                    <th>date enchere</th>
                                    <th>montant</th>
                                </tr>
                                </thead>
                                <tbody>


                                {stat?.map((res) => zanaka(res))}
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
        </>
    );
}