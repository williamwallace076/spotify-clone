import React from "react";
import './Plans.css'

export default () => {
    return (
        <div className="plans-area">
            <h4 className="plans-title-area" > Escolha Seu plano Premium</h4>
            <span className="plans-subtitle-area" >Ouça sem limites no seu celular, alto-falante e em outros dispositivos.
            <div className="cards-payment">Aceiamos cartões de todos os tipos !</div>
            </span>

            <div className="selection-plan-area">
                <div className="plan-card">
                    <p className="card-title">1 mês grátis ao assinar</p>
                    <p className="card-subtitle">Pagamento único disponível</p>
                    <p className="tipe-of-plan">Individual</p>
                    <p className="value-of-plan">R$ 19,90/mês após o período da oferta</p>
                    <p className="number-of-counts">1 Conta</p>
                    <div className="descripition-card">
                    <p>✅ Ouça músicas sem anúncios</p>
                    <p>✅ Ouça em qualquer lugar — até no modo offline</p>
                    <p>✅ Escolha a música que quer ouvir</p>
                    <p>✅ Faça um plano pré-pago ou uma assinatura</p>
                    </div>

                    <button className="button-card">COMEÇAR</button>

                    <span className="terms-and-conditions"><u>Sujeito a Termos e Condições.</u> O mês grátis não está disponível para usuários que já experimentaram o Premium.</span>
                </div>
                <div className="plan-card">
                    <p className="card-title">1 mês grátis ao assinar</p>
                    <p className="card-subtitle">Pagamento único disponível</p>
                    <p className="tipe-of-plan">Duo</p>
                    <p className="value-of-plan">R$ 24,90/mês após o período da oferta</p>
                    <p className="number-of-counts">2 Contas</p>
                    <div className="descripition-card">
                    <p>✅ 2 contas Premium para um casal que mora junto</p>
                    <p>✅ Ouça sem anúncios, no modo offline e sob demanda</p>
                    <p>✅ Faça um plano pré-pago ou uma assinatura</p>
                    </div>

                    <button className="button-card">COMEÇAR</button>

                    <span className="terms-and-conditions"><u>Sujeito a Termos e Condições.</u> O mês grátis não está disponível para usuários que já experimentaram o Premium.</span>
                </div>
                <div className="plan-card">
                    <p className="card-title">1 mês grátis ao assinar</p>
                    <p className="card-subtitle">Pagamento único disponível</p>
                    <p className="tipe-of-plan">Família</p>
                    <p className="value-of-plan">R$ 34,90/mês após o período da oferta</p>
                    <p className="number-of-counts">Até 6 Contas</p>
                    <div className="descripition-card">
                    <p>✅ 6 contas Premium para familiares que moram no mesmo endereço</p>
                    <p>✅ Bloqueie músicas com conteúdo explícito</p>
                    <p>✅ Ouça sem anúncios, no modo offline e sob demanda</p>
                    <p>✅ Spotify Kids: um aplicativo separado, feito especialmente para crianças</p>
                    <p>✅ Faça um plano pré-pago ou uma assinatura</p>
                    </div>

                    <button className="button-card">COMEÇAR</button>

                    <span className="terms-and-conditions"><u>Sujeito a Termos e Condições.</u> O mês grátis não está disponível para usuários que já experimentaram o Premium.</span>
                </div>
                <div className="plan-card">
                    <p className="card-title">1 mês grátis ao assinar</p>
                    <p className="tipe-of-plan">Universitário</p>
                    <p className="value-of-plan" id="universitario">R$ 9,90/mês após o período da oferta</p>
                    <p className="number-of-counts">1 Conta</p>
                    <div className="descripition-card">
                    <p>✅ Desconto especial para estudantes universitários que tenham direito à oferta</p>
                    <p>✅ Ouça músicas sem anúncios</p>
                    <p>✅ Ouça em qualquer lugar — até no modo offline</p>
                    <p>✅ Escolha a música que quer ouvir</p>
                    </div>

                    <button className="button-card">COMEÇAR</button>

                    <span className="terms-and-conditions">Oferta disponível somente para estudantes de instituições de ensino superior credenciadas. O mês grátis não está disponível para usuários que já experimentaram o Premium. <u>Sujeito aos Termos e Condições</u> da oferta do Spotify de desconto para universitários.</span>
                </div>
                
            </div>
        </div>
    )
}