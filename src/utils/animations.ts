'use client'

import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-up, .animate-left, .animate-right, .animate-scale')
      const windowHeight = window.innerHeight
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top
        const elementVisible = 100
        
        if (elementPosition < windowHeight - elementVisible) {
          element.classList.add('animated')
        }
      })
    }

    // Verifica animações ao carregar e ao rolar
    animateOnScroll()
    window.addEventListener('scroll', animateOnScroll)
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll)
    }
  }, [])
}

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute('href')
      // Só previne e faz scroll se for âncora interna
      if (!href || !href.startsWith('#')) return

      e.preventDefault()
      const targetElement = document.querySelector(href)
      if (targetElement && targetElement instanceof HTMLElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll)
    })
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])
}