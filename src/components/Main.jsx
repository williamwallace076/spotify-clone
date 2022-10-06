import React from "react";
import './Main.css';
import logo1 from '../sources/imgs/logo-1.png'
import logo2 from '../sources/imgs/logo-2.png'
import logo3 from '../sources/imgs/logo-3.png'
import logo4 from '../sources/imgs/logo-4.png'

export default () => {
    return (
        <div>
            <main className="main-content">

                <div className="anouciament-area">
                    <h1> Aproveite 1 mês gráis de Premium </h1>
                    <h2>Depois, pague somente R$ 19,90/mês. Cancele quando quiser.</h2>
                    <div className="button-area">

                        <button className="button start">COMEÇAR</button>
                        <button className="button plans">VER PLANOS</button>
                    </div>

                    <span> <u>Sujeito a Termos e Condições.</u> O mês grátis não está disponível para usuários que já experimentaram o Premium.</span>
                </div>

                <div className="detailment-area">

                    <h3 className="detailment-title">Por que ser Premium? </h3>

                    <div className="detailment-icons">
                        <div className="icons-area">
                            <img src={logo1} alt="Modo offline" />
                            <h4 className="icons-title">Modo offline</h4>
                            <p  className="icons-subtitle">Ouça música onde estiver.</p>
                        </div>
                        <div className="icons-area">
                        <img src={logo2} alt="Ouça músicas sem anúncios." />
                            <h4 className="icons-title" >Ouça músicas sem anúncios.</h4>
                            <p  className="icons-subtitle">Curta música, sem parar.</p>
                        </div>
                        <div className="icons-area">
                        <img src={logo3} alt="Ouça o que quiser." />
                            <h4 className="icons-title" >Ouça o que quiser.</h4>
                            <p  className="icons-subtitle">Mesmo no celular ou tablet.</p>
                        </div>
                        <div className="icons-area">
                        <img src={logo4} alt="Troque de música o quanto quiser." />
                            <h4 className="icons-title" >Troque de música o quanto quiser.</h4>
                            <p className="icons-subtitle">Pule quando quiser.</p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}