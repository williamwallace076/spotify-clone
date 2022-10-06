import React from "react";
import './Header.css'
import logoSpot from '../sources/imgs/PngItem_1897269.png'

export default () => {
    return (
        <div>
            <header className="header">

                <img className="logo-header" src={logoSpot} alt="Spotfy Logo" />

                <ul className="menu-header">
                    <li className="bt-menu"> Premium </li>
                    <li className="bt-menu"> Suporte </li>
                    <li className="bt-menu"> Baixar </li>
                    <li className="bt-menu"> Inscrever-se </li>
                    <li className="bt-menu"> Entrar </li>
                </ul>
            </header>
        </div>
    )
}