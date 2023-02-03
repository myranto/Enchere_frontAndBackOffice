import {BaseUrl} from "../../BaseUrl";
import {useEffect} from "react";

export function CheckToken(){
    let link = '';
    const user1 = sessionStorage.getItem("client");
    const val = (user1!=null)?JSON.parse(user1):null;
    if ((val==null) || (!val.hasOwnProperty("id"))) {
        alert("vous devez d'abord vous connecter ")
        window.location.replace("/Login");
    }
    link = BaseUrl+"enchere/cli/checkToken/"+val.id+"/"+val.token;

    useEffect(() => {
        if (link!=='') {
            fetch(link)
                .then((response) => response.json())
                .then((data) => {
                    if (data.error!==null){
                        alert("vous devez d'abord vous reconnecter")
                        window.location.replace("/Login");
                    }
                })
                .catch((e) => {
                    console.log(e)
                });
        }
    },[]);
    return(
        <>
        </>
    )
}