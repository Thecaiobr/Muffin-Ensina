'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useScrollAnimation,  } from '@/utils/animations'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useScrollAnimation()
  // useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <Link href="#" className="logo">
          <img src="pequeno.png" alt="Muffin Logo" />
          {/* <span>Muffin</span> */}
        </Link>
        
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <Link href="#home" onClick={closeMenu}>Início</Link>
          <Link href="#about" onClick={closeMenu}>Nossa Missão</Link>
          <Link href="#drayasmin" onClick={closeMenu}>Fundadora</Link>
          <Link href="#pricing" onClick={closeMenu}>Serviços</Link>
          <Link href="#testimonials" onClick={closeMenu}>Depoimentos</Link>
          <Link href="#contact" onClick={closeMenu}>Contato</Link>
        </nav>
        
        <div className="hamburger" id="hamburger" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  )
}