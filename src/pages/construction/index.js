import React from "react";
import Header from "../../components/header";
import mant from "../../assets/webMantenim.svg";
import logo from "../../assets/logonegro.svg";
import "./styles.css";

const Construction = () => {
  return (
    <div className="pricipal">
      <div className="imgContainer">
        <img src={mant} alt="22" className="img"></img>
      </div>
      <div className="textContainer">
        <h1>ESTAMOS EN CONSTRUCCIÓN</h1>
        <br />
        <p>Pronto podras realizar tus pedidos por este medio</p>
        <br />
        <p>Mientras tanto puedes escribirnos al +51 927 389 072</p>
        <br />
        <p>o seguirnos en nuestras redes sociales</p>

        
      </div>
      <div className="contenedor">
        <a href="https://www.facebook.com/makihomesushi" className="icono-social" id="facebook">
          <i className="fa fa-2x fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/makihomesushi/" className="icono-social" id="instagram">
          <i className="fa fa-2x fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.wa.link/udnhu8" className="icono-social" id="whatsapp">
          <i className="fa fa-2x fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>

    </div>
  );
};

export default Construction;
