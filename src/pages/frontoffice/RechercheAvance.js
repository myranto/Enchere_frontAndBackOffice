import {useEffect, useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import Modal from "react-modal";
import {customStyles} from "./fiche/Fiche";
import {Value} from "./ListeEnchere";
import HomeCli from "./HomeCli";

const style={
    color:"black"
};
const butt = {
    float:"right"
}
function RechercheAvance() {
    const [list,setList] = useState(null);
    const [response,setResponse] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [checkedValues, setCheckedValues] = useState([]);

    useEffect(() => {
        fetch(BaseUrl+"enchere/admin/categorie")
            .then((response) => response.json())
            .then((data) => {
                setList(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const validateCheckBox = (e) =>{
        e.preventDefault();
        const { value } = e.target;
        if (checkedValues.includes(value)) {
            setCheckedValues(checkedValues.filter((item) => item !== value));
        } else {
            setCheckedValues([...checkedValues, value]);
        }
    }
        const handleSubmit = (e) =>{
            e.preventDefault();
            const form = e.target;
            const  date_min = form.elements.namedItem('date_min').value;
            const  date_max = form.elements.namedItem('date_max').value;
           let prix = form.elements.namedItem('prix').value;
           if (prix==="")
               prix=-1;
            const  status = form.elements.namedItem('status').value;
           const   keyWord = form.elements.namedItem('keyWord').value;
           const json = {
               "date_min" : date_min,
               "date_max" : date_max,
               "keyWord" : keyWord,
               "categorie" : checkedValues,
               "status" : status,
               "prix" : prix
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
                    setResponse(res.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    return (
        <>
            <HomeCli />
            <main id="main" className="main-content position-sticky max-height-vh-100 h-100 border-radius-lg ">

            <div className="container">
                <div className="row ">
                    <form onSubmit={handleSubmit}  className={"form-control"} autoComplete="off">
                        <h1 className="text-center">Recherche avancé</h1>
                            <div className="row">
                                {/*<div className="col-md-2">*/}
                                    <div className="form-group">
                                        <Modal

                                            isOpen={modalIsOpen}
                                            onRequestClose={() => setModalIsOpen(false)}
                                            style={customStyles}
                                        >
                                            <button className={"w-25 btn-close btn-danger"} style={style} onClick={() => setModalIsOpen(false)}>Close</button>
                                            <button  type="button" style={butt} className={"w-25 btn-close"} onClick={()=>setModalIsOpen(false)} >valider</button>
                                            <h2>choix categorie !</h2>
                                            <form className={"form-control"}  >
                                                {list?.map((e)=> (
                                                    <>
                                                        <label htmlFor="cat">{e.nom}</label><input  className={"form-check"} type="checkbox" onChange={validateCheckBox} id={"cat"} name={"cat"} value={e.id} />
                                                    </>
                                                ))}
                                            </form>
                                        </Modal>
                                        <a type={"button"} className="btn btn-outline-info " onClick={()=>setModalIsOpen(true)}>choix categorie</a>
                                {/*    </div>*/}
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="date_min">Date min enchere</label>
                                        <input type="date" className="form-control" id="date_min" name="date_min"></input>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="date_max">Date max enchere</label>
                                        <input type="date" className="form-control" id="date_max" name="date_max"></input>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="prix">Prix</label>
                                        <input type="number" className="form-control" id="prix" name="prix"></input>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-control">
                                        <label htmlFor="stat">Status</label>
                                        <select className="form-control" name="status" id="stat">
                                            <option value="-1">select status</option>
                                            <option value="0">non fini</option>
                                            <option value="1">fini</option>
                                        </select>
                                        {/*<input type="number" className="form-control" id="stat" name="status"></input>*/}
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="key">Mot clé</label>
                                        <input type="text" className="form-control" id="key" name="keyWord"></input>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="form-group">
                                        <br/><button type="submit" id="btn" className="btn btn-success col-lg-6">Valider</button>
                                    </div>
                                </div>


                            </div>
                    </form>
                </div>
            </div>
            <div className="container">
                <h1>Liste de vos encheres </h1>
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
                    {response?.map((e)=>Value(e.enchere))}
                    </tbody>
                </table>
            </div>
            </main>
        </>
    );
}

// const Value = (props) => {
//     const date = new Date(props.date_enchere);
//     return (
//         <tr key={props.id}>
//             <td>{date.toString()}</td>
//             <td>{props.id}</td>
//             <td>{props.idcategorie.nom}</td>
//             <td>{props.duree} h</td>
//             <td>{props.prix_vente} Ariary </td>
//             <td>{props.prix_mise_enchere} Ariary </td>
//             <td><Link to={`/FicheEnchere/${props.id}`} >Détail</Link></td>
//         </tr>
//     );
// }

export default RechercheAvance;