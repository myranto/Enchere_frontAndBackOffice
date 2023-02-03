import {useEffect, useState} from "react";
import ListCatego from "../../component/catego/list";
import {BaseUrl} from "../../BaseUrl";

function ListeCategorie() {
        const [list,setList] = useState(null);
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
    return (
        <>
            <div className="container">
                <h1>Liste des categorie</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <td>idCategorie</td>
                        <td>Categorie</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                         {list?.map((res)=>ListCatego(res))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
//
// const Value = (props) => {
//     return (
//         <>
//             <td>{props.id}</td>
//             <td>{props.cat}</td>
//             <td><button className="btn btn-danger">Delete</button></td>
//         </>
//     );
// }

export default ListeCategorie;