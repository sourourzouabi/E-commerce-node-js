import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Boutique from "./components/boutique/boutique";
import Reclamation from "./components/réclamation/ReclamationForm";
import ReclamationDetails from "./components/traitment_de_réclamtion/ReclamationDetails";
import PhonePage from "./components/accieul/PhonePage";

function App() {
	const user = localStorage.getItem("token");
  return (
    <Routes>
      {/* Redirect from root path to login page */}
	  {user && <Route path="/" exact element={<Main />} />}
      <Route path="/" element={<Navigate replace to="/login" />} />
     
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
	  <Route path="/accueil" element={<PhonePage />} />
      <Route path="/boutique" element={<Boutique />} />
      <Route path="/auto" element={<Reclamation />} />
      <Route path="/traitement" element={<ReclamationDetails />} />
      
      {/* Main component for other routes */}
      
    </Routes>
  );
}

export default App;
