import React from "react";
import './Footer.css'
import logoSpot from '../sources/imgs/PngItem_1897269.png'
import twitterIcon from '../sources/imgs/twitter-icon.png'
import fbIcon from '../sources/imgs/face-logo.png'
import instaIcon from '../sources/imgs/insta-logo.png'

export default () => {
    return (
        <div>
            <footer className="footer">
                <div className="main-footer">

                    <img className="footer-spot-logo" src={logoSpot} alt="logo" />

                    <div className="about-uls">
                        <ul className="colum-info">
                            <h4 className="title-ul-footer">EMPRESA</h4>
                            <li className="bt-header" >Sobre</li >
                            <li className="bt-header" >Empregos</li >
                            <li className="bt-header" >For the Record</li >
                        </ul>
                        <ul className="colum-info">
                        <h4 className="title-ul-footer">COMUNIDADES</h4>
                            <li className="bt-header" >Para Artistas</li >
                            <li className="bt-header" >Desenvolvedores</li >
                            <li className="bt-header" >Publicidade</li >
                            <li className="bt-header" >Investidores</li >
                            <li className="bt-header" >Fornecedores</li >
                        </ul>
                        <ul className="colum-info">
                        <h4 className="title-ul-footer">LINKS ÚTEIS</h4>
                            <li className="bt-header">Suporte</li >
                            <li className="bt-header">Suporte</li >
                            <li className="bt-header">Aplicativo móvel grátis</li >
                        </ul>
                    </div>

                    <div className="social">
                        <img className="social-icon" src={instaIcon} alt="insta" />
                        <img className="social-icon" src={twitterIcon} alt="twitter" />
                        <img className="social-icon" src={fbIcon} alt="facebook" />
                    </div>
                </div>

                <div className="secondary-footer">
                    <ul className="btn-footer-ul">
                        <li className="btn-footer-li" style={{
                            width:'3rem'
                        }}>Legal</li>
                        <li className="btn-footer-li">Centro de Privacidade</li>
                        <li className="btn-footer-li">Política de privacidade</li>
                        <li className="btn-footer-li" style={{
                            width:'3rem',
                            marginRight:'5px'
                        }}>Cookies</li>
                         <li className="btn-footer-li">Sobre Anúncios</li>
                    </ul>
                    
                    <div className="about-site">
                    <span>Brasil
                    </span>
                    <p>© 2022 Spotify AB</p>
                    </div>

                </div>
            </footer>
        </div>
    )
}