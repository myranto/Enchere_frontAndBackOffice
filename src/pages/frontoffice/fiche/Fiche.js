import {useNavigate, useParams} from "react-router-dom";
import Modal from 'react-modal';
import {useEffect, useState} from "react";
import {BaseUrl} from "../../../BaseUrl";
import {CheckToken} from "../../token/Authentification";
import HomeCli from "../HomeCli";
import {Footer} from "../../../component/MenuCli/Footer";
import {color} from "./FicheHistorique";
export const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '50%',
        height                : '50%'
    }
};
function Fiche(){
   const style={
        color:"red"
    };
   const nav = useNavigate();
    let { idenchere } = useParams();
    const idc = sessionStorage.getItem("idclient");
    if (idc==null){
        alert('connectez vous')
        nav('/Login')
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [list,setList] = useState(null);
    useEffect(() => {
        fetch(BaseUrl+"enchere/cli/enchere/"+idenchere)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
                setList(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    },[]);
    // const variable =FindId(idenchere)
    const value = sessionStorage.getItem("client");
   const cli = (value!==null)?JSON.parse(value):null;

    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = e.target;
        const montant = formData.elements.namedItem('montant').value;
        let data = {
            "idclient":{
                "id":idc
            },
            "idenchere":list?.enchere?.id,
            "montant":montant
        };
        console.log(data)

        fetch(
            BaseUrl+"enchere/cli/enchere/encherir?token="+cli.token,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((response) => response.json())
            .then((res) => {
                if (res.error!==null)
                    setError(res.error)
                else{
                    alert(res.data)
                    window.location.replace("/indexCli")
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
      <>
          <HomeCli />
          <div className="fashion_section">
              <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                      <div className="container">
                          <h1>Description : ... {list?.enchere?.description}</h1>
                          <div className="row">

                              {list?.pic.map((e) => <Img key={e.id} img={e} prixd={list?.enchere?.prix_mise_enchere} name={list?.enchere?.description}/>)}
                          </div>

                          <h1>Prix minimale de vente : {list?.enchere?.prix_vente} Ariary</h1>
                          <h1>Prix de mise de depart : {list?.enchere?.prix_mise_enchere} Ariary</h1>
                          <p> liste de personne qui ont encherit :</p>
                          <table className="table-hover tab-content table table-responsive">
                              <thead>
                              <tr>
                                  <th>nom Client</th>
                                  <th>montant</th>
                              </tr>
                              </thead>
                              <tbody>
                              {list?.enchere?.list_rencher?.map((e) => <Person_enchere key={e.id} person={e}/>)}
                              </tbody>
                          </table>
                          <Modal
                              isOpen={modalIsOpen}
                              onRequestClose={() => setModalIsOpen(false)}
                              style={customStyles}
                          >
                              <h2>Rencherir!</h2>
                              <button onClick={() => setModalIsOpen(false)}>Close</button>
                              <form className={"form-control"} onSubmit={handleSubmit}>
                                  <p className={"form-label"}>entrer montant</p>
                                  <CheckToken />
                                  <input className={"form-control"} type="number" min={0} name="montant" />
                                  <h4 style={style}>{error}</h4>
                                  <input type="submit" className={"btn btn-success"} value="valider" />
                              </form>
                          </Modal>
                          <button  className={"btn btn-success"} onClick={()=>setModalIsOpen(true)}>Rencherir</button>
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
// function FindId(props){
//     const value = localStorage.getItem("list");
//     let list = [];
//     list = (value!==null)?JSON.parse(value):[];
//     for (let i = 0; i < list.length; i++) {
//         if (String(list[i].enchere.id)===props){
//             return list[i]
//         }
//     }
//     return null;
// }

const Person_enchere =(props)=>{
    return(
        <tr>
            <td>{props.person.idclient.nom}</td>
            <td>{props.person.montant} Ariary</td>
        </tr>
    );
}
const Img= (props) => {
    return (
        <>
            <div className="col-lg-4 col-sm-4">
                <div className="box_main">
                    <h4 className="shirt_text">{props.name}</h4>
                    <p className="price_text">Start Price <span
                        style={color}>{props.prixd} ariary</span></p>
                    <div className="electronic_img"><img src={props.img.pic_name}/></div>
                    <div className="btn_main">
                        <div className="seemore_bt"><a href="#">See More</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Fiche;