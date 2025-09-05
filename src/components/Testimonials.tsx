'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  return (
    <section className="section testimonials" id='testimonials'>
      <div className="container">
        <div className="section-title animate-up">
          <h2>O que dizem os tutores</h2>
          {/* <p>Experiências reais de quem aprendeu a cuidar melhor de seus companheiros</p> */}
        </div>
        <div className="testimonial-slider">
          <div className="testimonial-card animate-up delay-1">
            <img src="depoimentoblue.jpeg" alt="Cliente 1" className="testimonial-avatar" />
            <p className="testimonial-quote">Eu sou tão grata por ter encontrado a Muffin e a vet Yas! Comecei acompanhando as fofurices da queen Muffin, e quando surgiu a oportunidade já fiz a mentoria.
Como tutora de coelhinho há 15 anos, fez uma diferença gigantesca na forma de cuidar, observar e entender mais sobre os coelhos. Agora tem feira toda semana e muito feno.
É mais que uma mentoria, é  afeto, é carinho, é uma troca de experiências muito especial.</p>
            <p className="testimonial-author">- Juliana, tutora do Blue</p>
          </div>
          <div className="testimonial-card animate-up delay-2">
            <img src="depoimentodaiane.jpeg" alt="Cliente 2" className="testimonial-avatar" />
            <p className="testimonial-quote">O Muffin Ensina foi essencial para mim, eu me sentia perdida sobre alimentação e bem-estar. Na minha cidade não tem veterinário especializado, então encontrei a Yasmim pelo Instagram e aproveitei a consultoria para tirar todas as dúvidas. Sou muito grata e recomendo demais!</p>
            <p className="testimonial-author">- Dayana, tutora do Frederico</p>
          </div>
          <div className="testimonial-card animate-up delay-3">
            <img src="depoimentoleticia.jpeg" alt="Cliente 3" className="testimonial-avatar" />
            <p className="testimonial-quote">A Muffin esteve presente em todo meu processo de amor, luto e cura com os coelhinhos. Yasmim e o projeto Muffin Ensina me ajudaram muito, e foi por meio deles que o Floquinho chegou para renovar meu coração. A consultoria me ensinou como oferecer uma vida digna e feliz para ele. Sou muito grata por esse projeto e pelo legado da Muffin.</p>
            <p className="testimonial-author">- Letícia, tutora do Tutu e Floquinho</p>
          </div>
        </div>
      </div>
    </section>
  )
}