import React, {useState} from "react";
import {BaseUrl} from "../../BaseUrl";
import {useNavigate} from "react-router-dom";
import '../../css/style_k.css';

export const Inscription = () => {
    const style={
        color:"red"
    };
    const link = BaseUrl+"enchere/cli/inscription";

    const [response,setResponse] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = e.target;
        const mdp = formData.elements.namedItem('mdp').value;
        const email = formData.elements.namedItem('email').value;
        const retap = formData.elements.namedItem('retap').value;
        const tel = formData.elements.namedItem('tel').value;
        const user = formData.elements.namedItem('user').value;
        if (mdp!==retap)
            window.alert("entrer un mot de passe correct");
        else{
            const json = {
                "nom":user,
                "email":email,
                "mdp":mdp,
                "tel":tel
            }
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
                        window.alert("account create with success!");
                        window.location.href = "/log";
                    }
                })
                .catch((error) => {
                    console.error(error);
                    //TODO implement error
                });
        }
    }
    const history = useNavigate();
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
                        <h3>Inscription</h3>
                        <div className="login-form">
                            <form  onSubmit={handleSubmit}>
                                <label htmlFor="username">Username</label>
                                <input type="text"  name="user" /><br/>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" /><br/>

                                <label htmlFor="tel">telephone</label>
                                <input type="tel" name="tel"   className="form-control"></input><br/>

                                <label htmlFor="pwd">Mot de passe</label>
                                <input type="password" name="mdp"className="form-control"></input><br/>


                                <label htmlFor="pwdconf">Retaper le mot de passe</label>
                                <input type="password" name="retap"
                                       className="form-control"></input><br/>
                                <h3 style={style}>{response}</h3>

                                {/*<center> <button type="submit" className="btn btn-primary">Valider</button></center>*/}
                                <button type="submit" className="btn btn-primary">inscription</button>


                            </form>
                        </div>

                    </div>
                </div>
            {/*<main className="page contact-us-page">*/}
            {/*    <section className="clean-block clean-form dark">*/}
            {/*        <div className="container">*/}
            {/*            <form onSubmit={handleSubmit}>*/}
            {/*                <h1 className="text-center">Inscription</h1>*/}
            {/*                <label htmlFor="username">Username</label>*/}
            {/*                <input type="text" name="user"></input><br/>*/}

            {/*                <label htmlFor="email">Email</label>*/}
            {/*                <input type="email" name="email" className="form-control"></input><br/>*/}

            {/*                <label htmlFor="tel">telephone</label>*/}
            {/*                <input type="tel" name="tel"   className="form-control"></input><br/>*/}

            {/*                <label htmlFor="pwd">Mot de passe</label>*/}
            {/*                <input type="password" name="mdp"className="form-control"></input><br/>*/}


            {/*                <label htmlFor="pwdconf">Retaper le mot de passe</label>*/}
            {/*                <input type="password" name="retap"*/}
            {/*                          className="form-control"></input><br/>*/}
            {/*                <h3 style={style}>{response}</h3>*/}

            {/*                <center> <button type="submit" className="btn btn-primary">Valider</button></center>*/}

            {/*                <button className="btn btn-danger" onClick={()=>history('/Login')}>*/}
            {/*                    return*/}
            {/*                </button>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*</main>*/}
            </div>

        </>
    );
}