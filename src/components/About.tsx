export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        {/* <div className="section-title animate-up">
          <h2>Sobre o Projeto Muffin</h2>
          <p>Dedicados ao bem-estar e cuidado responsável de coelhos</p>
        </div> */}
        
        <div className="about-container">
          <div className="about-img animate-left">
            <img src="aumentado.png" alt="Coelho fofo" />
          </div>
          
          <div className="about-content animate-right">
            <h3>Nossa Missão</h3>
            <p>Muffin Ensina nasceu do desejo de mudar a forma como os coelhos, e hoje também outros pets exóticos, são cuidados e compreendidos. A inspiração veio da minha estrelinha, Muffin, que transformou minha vida e se tornou a razão de tudo.</p>
            <p>Cada post, consulta e manual é feito com dedicação, amor e ciência. Aqui, você encontra informações confiáveis para garantir que seu companheiro tenha a qualidade de vida que merece.</p>
            <p>Se você já tem ou pensa em ter um pet exótico, está no lugar certo! Uno o conhecimento técnico da veterinária com o olhar prático de tutora, para ajudar você a oferecer um cuidado seguro, consciente e cheio de afeto.</p>
            <a href="#pricing" className="btn">Comece a aprender agora</a>
          </div>
        </div>
      </div>
    </section>
  )
}