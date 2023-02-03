
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/common/Login";
import ValidationCompte from "./pages/backoffice/ValidationCompte";
import Historique from "./pages/frontoffice/Historique";
import ListeEnchere from "./pages/frontoffice/ListeEnchere";
import RechercheAvance from "./pages/frontoffice/RechercheAvance";
import FormCategorie from "./pages/backoffice/FormCategorie";
import ListeCategorie from "./pages/backoffice/ListeCategorie";
import HomeAdmin from "./pages/backoffice/Home";
import HomeCli from "./pages/frontoffice/HomeCli";
import FormDuration from "./pages/backoffice/DefaultDuration";
import Commission from "./pages/backoffice/commission/Commission";
import Statistique from "./pages/backoffice/Statistique";
import Fiche from "./pages/frontoffice/fiche/Fiche";
import {Inscription} from "./pages/common/Inscription";
import {LogOut} from "./pages/common/LogOut";
import {FicheHistorique} from "./pages/frontoffice/fiche/FicheHistorique";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<ListeEnchere />} />
        <Route path="indexAdmin" element={<HomeAdmin />} />
        <Route path="indexCli" element={<HomeCli />} />
        <Route path="getstat" element={<Statistique />} />
        <Route path="dure_auction" element={<FormDuration />} />
        <Route path="commission" element={<Commission />} />
        <Route path="Inscription" element={<Inscription />} />
        <Route path="Login" element={<Login action={0} />} />
        <Route path="login_admin" element={<Login action={1} />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="ValidationCompte" element={<ValidationCompte />} />
        <Route path="Historique" element={<Historique/>} />
        <Route path="ListeEnchere" element={<ListeEnchere/>} />
        <Route path="RechercheAvance" element={<RechercheAvance/>} />
        <Route path="FormCategorie" element={<FormCategorie/>} />
        <Route path="ListeCategorie" element={<ListeCategorie/>} />
        <Route path="FicheEnchere/:idenchere" element={<Fiche />} />
        <Route path="FicheHistorique/:idenchere" element={<FicheHistorique />} />

        {/*<Route path="/FicheEnchere/:idenchere/:idc" exact={true}>*/}
        {/*  <CheckToken />*/}

        {/*  <FicheEnchere />*/}
        {/*</Route>*/}
      </Routes>
    </Router>
  );
}

export default App;
