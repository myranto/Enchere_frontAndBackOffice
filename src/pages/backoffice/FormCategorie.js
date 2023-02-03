import {BaseUrl} from "../../BaseUrl";
import '../../css/new.css';
function FormCategorie() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = e.target;
        const categorie = formData.elements.namedItem('categorie').value;
        let data = {
            "nom":categorie
        };
        fetch(
            BaseUrl+"enchere/admin/categorie",
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
                // window.location.href = "/request-profil";
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <>
        <div className="main-block">
            <div className="left-part">
                <i className="fas fa-envelope"></i>
                <i className="fas fa-at"></i>
                <i className="fas fa-mail-bulk"></i>
            </div>
                <form onSubmit={handleSubmit}>
                    <h1>Ajout Catégorie</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="cat">Catégorie</label>
                                <input type="text" name="categorie" />
                            </div>
                        </div>
                    </div><br/>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" >Valider</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    </>
    );
}
export default FormCategorie;