import {useEffect, useState} from "react";
import {BaseUrl} from "../../../BaseUrl";
import HomeAdmin from "../Home";
import {Footer} from "../../../component/MenuCli/Footer";

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
            <HomeAdmin />
            <div className="fashion_section">
                <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className={"container"}>
                            <form onSubmit={handleSubmit}>
                                <h1>modifier commission</h1>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>last commission : {last?.taux} %</p>
                                        <div className="form-group">
                                            <label htmlFor="cat">default tough auction</label>
                                            <input type="number" className={"form-control input-group-text"} min={0} name="taux"/> %
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