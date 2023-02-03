let i = 0;

export default function zanaka(props){
    i+=1;
    return(
        <tr key={i}>
            <td>{props.nom}</td>
            <td>{props.date_encheres}</td>
            <td>{props.total}</td>
        </tr>
    );
}