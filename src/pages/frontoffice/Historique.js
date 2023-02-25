import { useState,useEffect } from "react";
import { BaseUrl } from "../../BaseUrl";

import HomeCli, {styles} from "./HomeCli";
import {Link, useNavigate} from "react-router-dom";
import {Footer} from "../../component/MenuCli/Footer";
function Historique() {
    const nav = useNavigate();
    const [list,setList] = useState(null);
    const iduser = sessionStorage.getItem("idclient");
    if (iduser==null){
        alert('connectez vous')
        nav('/Login')
    }

    useEffect(() => {
        fetch(BaseUrl+"enchere/cli/enchere/historique/"+iduser)
            .then((response) => response.json())
            .then((data) => {
                setList(data.data);
                console.log(data.data)
            })
            .catch((error) => {
                console.error(error);
            });
    },[]);
    return (
        <>
        <HomeCli />
            <div className="fashion_section">
                <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="container">
                            <h1>Historique Client </h1>
                            <table className="table-hover table tab-content table-responsive">
                                <thead>
                                <tr>
                                    <th>Date Encheres</th>
                                    <th>idEnchere</th>
                                    <th>Categorie</th>
                                    <th>Duree</th>
                                    <th>Description</th>
                                    <th>Prix  vente </th>
                                    <th>Prix mise Encheres</th>
                                    <th>Prix finale</th>
                                </tr>
                                </thead>
                                <tbody>

                                {list?.map((e)=>Value(e))}

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

const DisplayPrice=(props,prix) =>{
    let option = prix;
    if (props.length>0)
        option = props[0].montant;
    return(
      <>
          {option}
      </>
    );
}

const Value = (props) => {
    const date = new Date(props.date_enchere);
    return (
        <tr key={props.id}>
            <td>{date.toString()}</td>
            <td>{props.id}</td>
            <td>{props.idcategorie.nom}</td>
            <td>{props.duree} h</td>
            <td>{props.description}</td>
            <td>{props.prix_vente} Ariary </td>
            <td>{props.prix_mise_enchere} Ariary </td>
            <td>{DisplayPrice(props?.list_rencher,props?.prix_mise_enchere)} Ariary</td>
            <td><Link to={`/FicheHistorique/${props.id}`} >Détail</Link></td>
        </tr>
    );
}

export default Historique;