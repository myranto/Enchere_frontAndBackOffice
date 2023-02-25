import {  Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import HomeCli, {styles} from "./HomeCli";
import Comp_List from "../../component/account_reload";
import {Footer} from "../../component/MenuCli/Footer";

function ListeEnchere() {
    const [list,setList] = useState(null);
    useEffect(() => {
        fetch(BaseUrl+"enchere/cli/enchere/select")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
                setList(data.data);
                // localStorage.setItem('list',JSON.stringify(data.data))
            })
            .catch((error) => {
                console.error(error);
            });
    },[]);
    const none = "pas d'enchere en cours";
    return (
        <>
            <HomeCli />
            <div className="fashion_section">
                <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="container">
                            <h1>Liste des encheres </h1>
                                <center><h1 style={styles}>{list?.length===0 && none}</h1></center>
                            <table className="table-hover tab-content table-responsive">
                                <thead>
                                <tr>
                                    <td>Date Encheres</td>
                                    <td>idEnchere</td>
                                    <td>Categorie</td>
                                    <td>Duree</td>
                                    <td>Prix de vente </td>
                                    <td>Prix mise en Encheres</td>
                                </tr>
                                </thead>
                                <tbody>
                                {list?.map((e)=>Value(e.enchere))}
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

export const Value = (props) => {
    const date = new Date(props.date_enchere);
    return (
        <tr key={props.id}>
            <td>{date.toString()}</td>
            <td>{props.id}</td>
            <td>{props.idcategorie.nom}</td>
            <td>{props.duree} h</td>
            <td>{props.prix_vente} Ariary </td>
            <td>{props.prix_mise_enchere} Ariary </td>
            <td><Link to={`/FicheEnchere/${props.id}`} >Détail</Link></td>
        </tr>
    );
}


export default ListeEnchere;