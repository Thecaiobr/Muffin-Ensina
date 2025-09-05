'use client'

import { useState } from 'react'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem'
        }}>
          {/* Left side - Text content */}
          <div className="contact-content" style={{ flex: 1 }}>
            <div className="section-title animate-left" style={{ textAlign: 'left' }}>
              <h2>Entre em Contato</h2>
              <p>Tire suas dúvidas ou agende uma consulta</p>
            </div>
            
            <div className="contact-info animate-left" style={{ maxWidth: 400, width: '100%' }}>
              <h3>Informações de Contato</h3>
              <div className="contact-details">
                <div>
                  <i className="fas fa-phone-alt"></i>
                  <span>(31) 9 9562-1821</span>
                </div>
                <div>
                  <i className="fas fa-envelope"></i>
                  <span>muffinensina@gmail.com</span>
                </div>
              </div>
              
              <h3 style={{marginTop: '30px'}}>Redes Sociais</h3>
              <div className="social-links">
                <a href="https://www.instagram.com/muffinensina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/5531995621821">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="contact-image animate-right" style={{ 
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src="/muffin e mochi.png" 
              alt="Muffin e Mochi" 
              style={{
                maxWidth: '75%',
                height: 'auto',
                borderRadius: '15px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}