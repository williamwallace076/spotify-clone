import React from "react";
import CardPlans from "./CardPlans";
import './Plans.css'

import visaLogo from '../sources/imgs/visaLogo.webp'
import masterCardLogo from '../sources/imgs/masterCardLogo.jfif'
import amexLogo from '../sources/imgs/logoAmex.png'
import eloCardLogo from '../sources/imgs/EloLogo.webp'
import hipercardLogo from '../sources/imgs/hipercardLogo.jpg'
import itauLogo from '../sources/imgs/itauLogo.png'
import santanderLogo from '../sources/imgs/santanderLogo.png'
import bradescoLogo from '../sources/imgs/bradescoLogo.png'
import bbLogo from '../sources/imgs/bbLogo.png'
import caixaLogo from '../sources/imgs/caixaLogo.png'
import interLogo from '../sources/imgs/interLogo.png'
import boletoLogo from '../sources/imgs/boletoLogo.png'
import nubankLogo from '../sources/imgs/nubankLogo.png'
import originalLogo from '../sources/imgs/originalLogo.png'
import nextLogo from '../sources/imgs/nextLogo.jfif'
import sicrediLogo from '../sources/imgs/sicrediLogo.png'

export default () => {
    return (
        <div className="plans-area">
            <h4 className="plans-title-area" > Escolha Seu plano Premium</h4>
            <span className="plans-subtitle-area" >Ouça sem limites no seu celular, alto-falante e em outros dispositivos.
            <div className="cards-payment-logo">
                <div className="card-imgs">
                    <img className="card-img-item" src={visaLogo} alt="logo" />
                    <img className="card-img-item" src={masterCardLogo}alt="logo" />
                    <img className="card-img-item" src={amexLogo} alt="logo" />
                    <img className="card-img-item" src={eloCardLogo} alt="logo" />
                    <img className="card-img-item" src={hipercardLogo} alt="logo" />
                </div>
                <div className="more-cards"><u>+ Outros 11</u>
                    <ul className="more-cards">
                       <li>
                            <ul className="submenu">
                                <li className="card-img-item" ><img src={itauLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={santanderLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={bradescoLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={bbLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={caixaLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={interLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={boletoLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={nubankLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={originalLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={nextLogo} alt="logo" /></li>
                                <li className="card-img-item" ><img src={sicrediLogo} alt="logo" /></li>
                            </ul>
                        </li> 
                    </ul>
                </div>
            </div>
            </span>

            

            <div className="selection-plan-area">

                <CardPlans 
                cardTitle="1 mês grátis ao assinar" 
                cardSubtitle="Pagamento único disponível" 
                tipeOfPlan="Individual"
                valueOfPlan="R$ 19,90/mês após o período da oferta"
                numberOfCounts="1 Conta"
                descriptionCard1='✅ Ouça músicas sem anúncios'
                descriptionCard2='✅ Ouça em qualquer lugar — até no modo offline'
                descriptionCard3='✅ Escolha a música que quer ouvir'
                descriptionCard4='✅ Faça um plano pré-pago ou uma assinatura'
                buttonCard='COMEÇAR'
                termsAndConditions='O mês grátis não está disponível para usuários que já experimentaram o Premium.'
                > </CardPlans>

                <CardPlans 
                cardTitle="1 mês grátis ao assinar" 
                cardSubtitle="Pagamento único disponível" 
                tipeOfPlan="Duo"
                valueOfPlan="R$ 24,90/mês após o período da oferta"
                numberOfCounts="2 Contas"
                descriptionCard1='✅ 2 contas Premium para um casal que mora junto'
                descriptionCard2='✅ Ouça sem anúncios, no modo offline e sob demanda'
                descriptionCard3='✅ Faça um plano pré-pago ou uma assinatura'
                buttonCard='COMEÇAR'
                termsAndConditions='O mês grátis não está disponível para usuários que já experimentaram o Premium.'
                > </CardPlans>

                <CardPlans 
                cardTitle="1 mês grátis ao assinar" 
                cardSubtitle="Pagamento único disponível" 
                tipeOfPlan="Família"
                valueOfPlan="R$ 34,90/mês após o período da oferta"
                numberOfCounts="Até 6 Contas"
                descriptionCard1='✅ 6 contas Premium para familiares que moram no mesmo endereço'
                descriptionCard2='✅  Bloqueie músicas com conteúdo explícito'
                descriptionCard3='✅ Ouça sem anúncios, no modo offline e sob demanda'
                descriptionCard4='✅ Spotify Kids: um aplicativo separado, feito especialmente para crianças'
                descriptionCard5='✅  Faça um plano pré-pago ou uma assinatura'
                buttonCard='COMEÇAR'
                termsAndConditions='O mês grátis não está disponível para usuários que já experimentaram o Premium.'
                > </CardPlans>

                <CardPlans 
                cardTitle="1 mês grátis ao assinar" 
                tipeOfPlan="Universitário"
                valueOfPlan="R$ 9,90/mês após o período da oferta"
                numberOfCounts="1 Conta"
                descriptionCard1='✅ Desconto especial para estudantes universitários que tenham direito à oferta'
                descriptionCard2='✅ Ouça músicas sem anúncios'
                descriptionCard3='✅ Ouça em qualquer lugar — até no modo offline'
                descriptionCard4='✅  Escolha a música que quer ouvir'
                buttonCard='COMEÇAR'
                termsAndConditionsUniversitario='Oferta disponível somente para estudantes de instituições de ensino superior credenciadas. O mês grátis não está disponível para usuários que já experimentaram o Premium. '
               > </CardPlans>

            </div>
    </div>
    )
}