import React from "react";
import phone from "../img/phone.png";
import instagram from "../img/inst.png";
import mail from "../img/mail.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__title">Навигация</p>
        <div className="footer__nav-block flex">
          <nav className="footer__nav">
            <ul>
              <li>
                <a href="#">Кухни</a>
              </li>
              <li>
                <a href="#">Спальни</a>
              </li>
              <li>
                <a href="#">Гостинные</a>
              </li>
              <li>
                <a href="#">Прихожие</a>
              </li>
              <li>
                <a href="#">Офисная мебель</a>
              </li>
              <li>
                <a href="#">Детская</a>
              </li>
              <li>
                <a href="#">Шкафы</a>
              </li>
              <li>
                <a href="#">Матрасы</a>
              </li>
              <li>
                <a href="#">Детская мебель</a>
              </li>
            </ul>
          </nav>
          <div className="footer__address">
            <a href="#">LM</a>
            <p>
              г. Анапа, Анапское шоссе,
              <br /> 30 Ж/К Черное море
            </p>
          </div>
        </div>
        <div className="footer__contacts flex">
          <ul>
            <li>
              <a href="#">Акция</a>
            </li>
            <li>
              <a href="#">Новинки</a>
            </li>
          </ul>
          <div className="contacts-block flex">
            <div className="contact flex">
              <img src={phone} alt="Телефон" />
              <a href="tel:+79648999119">8 (964) 89 99 119</a>
            </div>
            <div className="contact flex">
              <img src={instagram} alt="Инстаграм" />
              <a href="#">Instagram</a>
            </div>
            <div className="contact flex">
              <img src={mail} alt="Письмо" />
              <a href="#">mebel_loft_anapa@mail.ru</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
