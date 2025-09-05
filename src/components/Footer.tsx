import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            {/* <Link href="#" className="footer-logo">
              <img src="https://cdn-icons-png.flaticon.com/512/1142/1142696.png" alt="Muffin Logo" />
              <span>Muffin</span>
            </Link> */}
            <Link href="#" className="footer-logo">
              <div style={{ 
                width: '300px', // Aumentei para 300px (era 200px)
                height: '300px',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img 
                  src="/Selo muffin rosa escuro.png"
                  alt="Muffin Logo" 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    // filter: 'brightness(0) invert(1)',
                    maxWidth: '100%'
                  }}
                />
              </div>
            </Link>
          </div>
          
          <div className="footer-links">
            <h3>Links Rápidos</h3>
            <ul>
              <li><Link href="#home">Início</Link></li>
              <li><Link href="#about">Nossa Missão</Link></li>
              <li><Link href="#drayasmin">Sobre Mim</Link></li>
              <li><Link href="#pricing">Serviços</Link></li>
              <li><Link href="#testimonials">Depoimentos</Link></li>
              <li><Link href="#contact">Contato</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contato</h3>
            {/* <p><i className="fas fa-map-marker-alt"></i> Florianópolis, SC - Brasil</p> */}
            <p><i className="fas fa-phone-alt"></i> (31) 9 9562-1821</p>
            <p><i className="fas fa-envelope"></i> muffinensina@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Muffin Ensina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}