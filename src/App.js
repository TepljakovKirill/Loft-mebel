import React from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";

import Header from "./Components/Header";
import ModalMenu from "./Components/ModalMenu";
import Search from "./Components/Search";
import Menu from "./Components/Menu";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Catalog from "./pages/Catalog/Catalog";
import NotFound from "./pages/NotFound";

import Footer from "./Components/Footer";

export const MebelContext = React.createContext("");

function App() {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [mebelList, setMebelList] = React.useState(0);

  return (
    <div className="App">
      <div className="wrapper">
        <MebelContext.Provider value={{ mebelList, setMebelList }}>
          {menuOpened ? (
            <ModalMenu onClickMenu={() => setMenuOpened(false)} />
          ) : (
            ""
          )}
          <Header />
          <main>
            <Search />
            <Menu onClickMenu={() => setMenuOpened(true)} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </MebelContext.Provider>
      </div>
    </div>
  );
}

export default App;
