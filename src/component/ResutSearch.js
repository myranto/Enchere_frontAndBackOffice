import HomeCli from "../pages/frontoffice/HomeCli";
import {Footer} from "./MenuCli/Footer";
import Modal from "react-modal";
import {customStyles} from "../pages/frontoffice/fiche/Fiche";
import {Value} from "../pages/frontoffice/ListeEnchere";
import {Link} from "react-router-dom";

export function ResultSimpleSearch(props) {
    return(
      <>
          <HomeCli />
          <div className="fashion_section">
              <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                      <div className="container">
                          <h1>Liste de vos encheres </h1>
                          <table className="table-hover table  table-responsive">
                              <thead>
                              <tr>
                                  <td>Date Encheres</td>
                                  <td>idEnchere</td>
                                  <td>description</td>
                                  <td>Categorie</td>
                                  <td>Duree</td>
                                  <td>Prix de vente </td>
                                  <td>Prix mise en Encheres</td>
                              </tr>
                              </thead>
                              <tbody>
                              {props?.list?.map((e)=>Values(e.enchere))}
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
export const Values = (props) => {
    const date = new Date(props.date_enchere);
    return (
        <tr key={props.id}>
            <td>{date.toString()}</td>
            <td>{props.id}</td>
            <td>{props.description} h</td>
            <td>{props.idcategorie.nom}</td>
            <td>{props.duree} h</td>
            <td>{props.prix_vente} Ariary </td>
            <td>{props.prix_mise_enchere} Ariary </td>
            <td><Link to={`/FicheEnchere/${props.id}`} >Détail</Link></td>
        </tr>
    );
}