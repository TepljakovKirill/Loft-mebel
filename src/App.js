import React from "react";
import "./scss/app.scss";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          <Search />
          <Menu />
        </main>
      </div>
    </div>
  );
}

export default App;
