import {useEffect, useState} from "react";
import {BaseUrl} from "../../../BaseUrl";

export default function Commission() {
    const [last,setLast] = useState("");
    useEffect(() => {
        fetch(BaseUrl+"enchere/admin/commission/last")
            .then((response) => response.json())
            .then((data) => {
                setLast(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;
        const taux = formData.elements.namedItem('taux').value;
        let data = {
            "taux":taux
        };
        if (taux==="")
            alert("veuillez remplir ce champ");
        else{
            fetch(
                BaseUrl+"enchere/admin/commission/create",
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
                            <h1>modifier commission</h1>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>last commission : {last?.taux} %</p>
                                    <div className="form-group">
                                        <label htmlFor="cat">default tough auction</label>
                                        <input type="number" min={0} name="taux"/> %
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