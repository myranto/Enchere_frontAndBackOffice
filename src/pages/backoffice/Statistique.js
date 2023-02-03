import {useEffect, useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import zanaka from "../../component/comStat";


export default function Statistique() {
    const [stat, setStat] = useState(null);
    useEffect(() => {
        fetch(BaseUrl + "enchere/stat/select")
            .then((response) => response.json())
            .then((data) => {
                setStat(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <h1>statistiques des encheres</h1>
            <table border={1}>
                <thead>
                <tr>
                    <th>categorie</th>
                    <th>date enchere</th>
                    <th>montant</th>
                </tr>
                </thead>
                <tbody>


                {stat?.map((res) => zanaka(res))}
                </tbody>
            </table>
        </>
    );
}