import { Outlet, Link } from "react-router-dom";

function Home() {

    return (
        <>
            {/*<br/><Link className="btn btn-primary" to='/Inscription' > Pages D'Inscription </Link><br/>*/}
            <br/><Link className="btn btn-primary" to='/Login' > se connecter en tant que client </Link><br/>
            <br/><Link className="btn btn-primary" to='/login_admin' > se connecter en tant que admin </Link><br/>
            <Outlet />
        </>
    );

}

export default Home;