import {useEffect, useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import HomeAdmin from "./Home";
import ListCatego from "../../component/catego/list";
import {Footer} from "../../component/MenuCli/Footer";

export default function FormDuration() {
    const [last,setLast] = useState("");
    useEffect(() => {
        fetch(BaseUrl+"enchere/admin/duration/last")
            .then((response) => response.json())
            .then((data) => {
                setLast(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = e.target;
        const tough = formData.elements.namedItem('tough').value;
        let data = {
            "value":tough
        };
        if (tough==="")
            alert("veuillez remplir ce champ");
        else {
            fetch(
                BaseUrl+"enchere/admin/duration/create",
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
                    alert(res.data)
                     window.location.href = "/indexAdmin";
                })
                .catch((error) => {
                    console.error(error);
                    //TODO implement error
                });
        }
    }
    return (
        <>
            <HomeAdmin />
            <div className="fashion_section">
                <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className={"container"}>
                            <form className={"form-control"} onSubmit={handleSubmit}>
                                <h1>ajouter une nouvelle duree par defaut des encheres</h1>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>la valeur par defaut est {last?.value} heures</p>

                                        <div className="form-group">
                                            <label htmlFor="cat">update it</label>
                                            <input className={"form-control input-group-text"} type="number" min={0} name="tough"/> heures
                                        </div>
                                    </div>
                                </div>
                                <br/>

                                            <button type="submit" className="btn btn-primary">Valider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}