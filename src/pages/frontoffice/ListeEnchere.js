import {  Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import HomeCli from "./HomeCli";
import '../../css/style2.css';

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
           <div>
            <HomeCli />
           </div>
            <main id="main" className="main-content position-sticky max-height-vh-100 h-100 border-radius-lg ">

            <div className="container">
                <h1>Liste des encheres </h1>
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
                    <center><p>{list?.length===0 && none}</p></center>
                    {list?.map((e)=>Value(e.enchere))}
                    </tbody>
                </table>
            </div>
            </main>
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