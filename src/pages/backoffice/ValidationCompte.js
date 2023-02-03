import {useEffect, useState} from "react";
import Comp_List from "../../component/account_reload";
import {BaseUrl} from "../../BaseUrl";

function ValidationCompte() {
    const [list,setList] = useState(null);
    useEffect(() => {
        fetch(BaseUrl+"enchere/cli/Reload_acccount")
            .then((response) => response.json())
            .then((data) => {
                setList(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (<>
        <div className="container">
            <h1>Liste des demande de rechargement </h1>
            <table className="table" border={1}>
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>email</th>
                        <th>montant</th>

                    </tr>
                </thead>
                <tbody>
                    {list?.map((res)=>Comp_List(res))}
                </tbody>
            </table>
        </div>

    </>);
}

// const Value = (props) => {
//     return (
//         <>
//             <td>{props.username}</td>
//             <td>{props.tel}</td>
//             <td>{props.montant} $ </td>
//             <td><button className="btn btn-primary">Valider</button></td>
//         </>
//     );
// }

export default ValidationCompte;