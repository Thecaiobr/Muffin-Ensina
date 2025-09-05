export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-title animate-up">
          <h1>Nossos Serviços</h1>
          {/* <p>Escolha a opção que melhor atende às necessidades do seu pet</p> */}
        </div>
        
        <div className="pricing-grid" style={{marginBottom: '50px'}}>
          <div className="pricing-card popular animate-up delay-1">
            <div className="pricing-header">
              <h3>Manual Muffin Ensina - Coelhos</h3>
              <div className="pricing-price">R$ 49,90</div>
            </div>
            <div className="pricing-features">
              <h4>O que você vai aprender:</h4>
              <ul>
                <li><i className="fas fa-check"></i> Nutrição correta</li>
                <li><i className="fas fa-check"></i> Comportamento</li>
                <li><i className="fas fa-check"></i> Espaço adequado</li>
                <li><i className="fas fa-check"></i> Enriquecimento ambiental</li>
                <li><i className="fas fa-check"></i> Principais doenças</li>
                <li><i className="fas fa-check"></i> Como agir em emergências</li>
                <li><i className="fas fa-check"></i> Cuidados em temperaturas extremas</li>
                <li><i className="fas fa-check"></i> Higiene</li>
              </ul>
            </div>
            <div className="pricing-button">
              <a
                href="https://pay.kiwify.com.br/ahXMYcs"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </a>
            </div>
          </div>
          
          <div className="pricing-card animate-up delay-2">
            <div className="pricing-header">
              <h3>Manual Muffin Ensina - Hamsters</h3>
              <div className="pricing-price">R$ 29,90</div>
            </div>
            <div className="pricing-features">
              <h4>O que você vai aprender?</h4>
              <ul>
                <li><i className="fas fa-check"></i> Nutrição correta</li>
                <li><i className="fas fa-check"></i> Espaço adequado</li>
                <li><i className="fas fa-check"></i> Enriquecimento ambiental</li>
                <li><i className="fas fa-check"></i> Vínculo e convivência</li>
                <li><i className="fas fa-check"></i> Cuidados com neonatos</li>
                <li><i className="fas fa-check"></i> Curiosidade e mitos</li>
              </ul>
            </div>
            <div className="pricing-button">
              <a
                href="https://pay.kiwify.com.br/T2utIgC"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card popular animate-up delay-3">
            <div className="pricing-header">
              <h3>Consultoria personalizada</h3>
              <div className="pricing-price">R$ 179,90</div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Atendimento por videochamada</li>
                <li><i className="fas fa-check"></i> Retorno em 30 dias para ajustes</li>
                <li><i className="fas fa-check"></i> Guia de cuidados personalizado</li>
              </ul>
            </div>
            <div className="pricing-button">
              <a
                href="https://wa.me/5531995621821"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar
              </a>
            </div>
          </div>
          
          <div className="pricing-card animate-up delay-4">
            <div className="pricing-header">
              <h3>Acompanhamento trimestral</h3>
              <div className="pricing-price">R$ 419,90</div>
            </div>
            <div className="pricing-features">
              <ul>
                <li><i className="fas fa-check"></i> Atendimento por videochamada</li>
                <li><i className="fas fa-check"></i> Acesso ao grupo de tutores</li>
                <li><i className="fas fa-check"></i> 3 meses de assistência via WhatsApp</li>
                <li><i className="fas fa-check"></i> Guia de cuidados personalizado</li>
                <li><i className="fas fa-check"></i> Lives mensais exclusivas</li>
              </ul>
            </div>
            <div className="pricing-button">
              <a
                href="https://wa.me/5531995621821"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}