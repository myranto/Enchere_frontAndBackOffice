import {useEffect, useState} from "react";
import {BaseUrl} from "../../BaseUrl";

export const LogOut = () =>{

    const iduser = sessionStorage.getItem("idclient");
    useEffect(() => {
        fetch(BaseUrl+"enchere/cli/log_out/"+iduser)
            .then((response) => response.json())
            .then((data) => {
                sessionStorage.removeItem("idclient");
                window.alert(data.data)
                window.location.replace('/Login')
                // localStorage.setItem("list",JSON.stringify(data.data))
            })
            .catch((error) => {
                console.error(error);
            });
    },[]);
    return (<></>);
}