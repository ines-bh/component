import "./App.css";
import React from "react";
import ProfilPhoto from "./component/profil/ProfilPhoto";
import FullName from "./component/profil/FullName";
import Adresse from "./component/profil/Adresse";

function App() {
  return (
    <div className="App">
      
      <FullName />
      <Adresse />
      <ProfilPhoto />
    </div>
  );
}

export default App;
