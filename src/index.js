import React from "react";
import { Provider } from "react-redux";
import store from "./js/store/store";
import ReactDOM from "react-dom/client"; // <-- aqui mudou
import CharacterSheet from "../src/Components/Character/CharacterSheet";

window.store = store;

function Layout() {
  return (
    <Provider store={store}>
      <div className="Layout">
        <CharacterSheet />
      </div>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Layout />);

if (module.hot) {
  module.hot.accept();
}
