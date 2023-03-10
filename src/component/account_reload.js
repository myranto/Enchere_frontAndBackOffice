import {BaseUrl} from "../BaseUrl";

export default  function Comp_List(props){
    const validate = (idclient) =>{
        if (window.confirm("validate this request ? ")===true){
            fetch(
                BaseUrl+"enchere/admin/account/"+idclient,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
                .then((response) => response.json())
                .then((res) => {
                    alert(res.data)
                    // nav("/ValidationCompte");
                    // window.location.reload();
                    window.location.href = "/indexAdmin";
                })
                .catch((error) => {
                    console.error(error);
                    //TODO implement error
                });
        }
    }
    return(
        <tr key={props.id}>
            <td>{props.idclient.nom}</td>
            <td>{props.idclient.email}</td>
            <td>{props.montant} Ar</td>
            <th><button className={"btn btn-info"} type="submit" onClick={()=>validate(props.idclient.id)}>valider</button></th>
        </tr>
    );
}