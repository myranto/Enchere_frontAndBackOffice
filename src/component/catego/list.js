export default function ListCatego(props) {
    return(
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.nom}</td>
        </tr>
    );
}