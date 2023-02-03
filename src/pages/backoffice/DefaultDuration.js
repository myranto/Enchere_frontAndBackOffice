import {useEffect, useState} from "react";
import {BaseUrl} from "../../BaseUrl";

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
            <div className="main-block">
                <div className="left-part">
                    <i className="fas fa-envelope"></i>
                    <i className="fas fa-at"></i>
                    <i className="fas fa-mail-bulk"></i>
                </div>
                <div className="container">
                    <div className="row col-md-12">
                        <form onSubmit={handleSubmit}>
                            <h1>ajouter une nouvelle duree par defaut des encheres</h1>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>la valeur par defaut est {last?.value} heures</p>

                                    <div className="form-group">
                                        <label htmlFor="cat">udpdate it</label>
                                        <input type="number" min={0} name="tough"/> h
                                    </div>
                                </div>
                            </div>
                            <br/>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Valider</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}