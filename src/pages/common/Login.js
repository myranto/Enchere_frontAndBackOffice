import {useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import {useNavigate} from "react-router-dom";
import '../../css/style_k.css';

function Login(props) {
    const isClient = (props) =>{
        if (props.hasOwnProperty("token")){
            const detail = {
                "id":props.id,
                "token":props.token
            }
            sessionStorage.setItem("client",JSON.stringify(detail));
            sessionStorage.setItem("idclient",detail.id);
            navigate('/ListeEnchere');
            // window.location.href = "/indexCli";
        }else{
            navigate('/ListeCategorie');
            // window.location.href = "/indexAdmin";
        }
    }
    const style={
        color:"red"
    };
    const user = (props.action===0)?"client":"admin";
    const link = (props.action===0)?BaseUrl+"enchere/cli/login":BaseUrl+"enchere/admin/login";
    let d_email = (props.action===0)?"stev@gmail.com":"admin@gmail.com";
    let d_mdp = (props.action===0)?"steve":"admin";
    const [email,setEmail] = useState(d_email);
    const [mdp,setMdp] = useState(d_mdp);
    const [response,setResponse] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const json = {
            "email": email,
            "mdp": mdp
        };
        // console.log(json);
        fetch(
            link,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json),
            }
        )
            .then((response) => response.json())
            .then((res) => {
                // alert(res.data)
                if (res.error!==null){
                    setResponse(res.error)
                }else{
                    isClient(res.data);
                // window.location.href = "/request-profil";
                }
            })
            .catch((error) => {
                console.error(error);
                //TODO implement error
            });
    }
    return (
        <>
            <div className={"parent clearfix"}>
                <div className="bg-illustration">
                    {/*<img src={process.env.PUBLIC_URL + '/images/auction.jpg'} alt="logo" />*/}

                        <div className="burger-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                </div>
                <div className="login">
                    <div className="container">
                        <h1>Login  {user}</h1>

                        <div className="login-form">
                            <form  onSubmit={handleSubmit}>
                                <input className="form-control" type="email" placeholder="E-mail Address" name="email" value={email}
                                       onChange={(event) => setEmail(event.target.value)}/>
                                <input className="form-control" placeholder="Password" type="password" name="pwd" value={mdp}
                                       onChange={(event) => setMdp(event.target.value)}/>
                                        <div className="forget-pass">
                                            <a  href="/Inscription">s'inscrire en tant que client</a>
                                        </div>
                                        <button type="submit">LOG-IN</button>

                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </>
            );
}



export default Login;