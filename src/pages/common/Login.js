import {useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import '../../css/util.css'
import  '../../css/main.css';
import {useNavigate} from "react-router-dom";

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
            navigate('/indexAdmin');
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
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 ">
                        <form className="login100-form validate-form" onSubmit={handleSubmit}>
					<span className="login100-form-title p-b-26">
						Welcome {user}
					</span>
                            <span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input className="form-control" type="email" name="email" value={email}
                                       onChange={(event) => setEmail(event.target.value)}/>
                                <span className="focus-input100" data-placeholder=""></span>
                            </div>

                            <div className="form-group" data-validate="Enter password">
                                <input className="form-control" type="password" name="pwd" value={mdp}
                                       onChange={(event) => setMdp(event.target.value)}/>
                                <span className="focus-input100" data-placeholder=""></span>
                            </div>
                            <h3 style={style}>{response}</h3>
                                <div className="">
                                    <button className="form-control btn btn-success" type="submit">
                                        Login
                                    </button>
                                </div>
                            <div className='form-group'>
                                <p>
                                <a   href="/Login">retour</a>
                                </p>
                                <a  href="/Inscription">s'inscrire en tant que client</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
            );
}



export default Login;