import React from "react";
import ReactDOM from "react-dom/client"; // <-- aqui mudou
import CharacterSheet from "./Components/Character/CharacterSheet";

function Layout() {
  return (
    <div className="Layout">
      <CharacterSheet />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Layout />);

if (module.hot) {
  module.hot.accept();
}
