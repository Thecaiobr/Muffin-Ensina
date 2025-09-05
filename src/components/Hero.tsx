export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <img 
            src="/menor.png" 
            alt="Logo Muffin Ensina" 
            className="hero-img animate-left"
          />
          <div className="hero-video">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/ANtpF1fUkvk?autoplay=0&controls=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center'
          }}>
            <a href="#pricing" className="btn">Clique aqui</a>
          </div>
        </div>
      </div>
    </section>
  )
}