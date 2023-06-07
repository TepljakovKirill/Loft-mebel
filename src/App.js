import React from "react";
import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="top-navigation">
            <div className="container">
              <div className="content flex">
                <nav className="navigation">
                  <ul className="flex">
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Контакты</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
