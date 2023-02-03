import { useState,useEffect } from "react";
import { BaseUrl } from "../../BaseUrl";
import '../../css/style2.css';

import HomeCli from "./HomeCli";
import {Link, useNavigate} from "react-router-dom";
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
            })
            .catch((error) => {
                console.error(error);
            });
    },[]);
    return (
        <>
        <HomeCli />
            <main id="main" className="main-content position-sticky max-height-vh-100 h-100 border-radius-lg ">
            <div className="container">
                <h1>Historique Client </h1>
                <table className="table-hover tab-content table-responsive">
                    <thead>
                        <tr>
                            <td>Date Encheres</td>
                            <td>idEnchere</td>
                            <td>Categorie</td>
                            <td>Duree</td>
                            <td>Description</td>
                            <td>Prix de vente </td>
                            <td>Prix mise en Encheres</td>
                            <td>Prix finale</td>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {list?.map((e)=>Value(e))}
                   
                    </tbody>
                </table>
            </div>
           </main>
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
            <td>8000 Ariary </td>
            <td><Link to={`/FicheHistorique/${props.id}`} >Détail</Link></td>

        </tr>
    );
}

export default Historique;