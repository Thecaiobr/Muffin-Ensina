// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const faqs = [
//   {
//     id: 1,
//     question: 'Qual a alimentação ideal para um coelho?',
//     answer: 'FENO'
//   },
//   {
//     id: 2,
//     question: 'Com que frequência devo levar meu coelho ao veterinário?',
//     answer: 'Coelhos saudáveis devem ter check-ups anuais com um veterinário especializado em animais exóticos. No entanto, se você notar qualquer mudança no apetite, fezes, comportamento ou aparência do seu coelho, deve procurar um veterinário imediatamente, pois coelhos escondem doenças até estarem muito graves.'
//   },
//   {
//     id: 3,
//     question: 'Como devo preparar o ambiente para meu coelho?',
//     answer: 'O habitat ideal para um coelho deve ser espaçoso (mínimo de 3m² para um coelho), com piso sólido (não gradeado), abrigo para se esconder, brinquedos para roer e enriquecimento ambiental. Deve ser mantido em local fresco, longe de correntes de ar e luz solar direta. Coelhos também precisam de tempo diário fora do cercado para se exercitar.'
//   },
//   {
//     id: 4,
//     question: 'Posso dar banho no meu coelho?',
//     answer: 'Não é recomendado dar banho em coelhos, pois pode causar estresse severo e problemas de saúde. Coelhos são animais muito limpos que se cuidam sozinhos. Se for necessário limpar alguma parte específica, use um pano úmido e seque completamente. Banhos completos só devem ser dados sob orientação veterinária em casos muito específicos.'
//   }
// ]

// export default function FAQ() {
//   const [activeId, setActiveId] = useState<number | null>(null)

//   const toggleFAQ = (id: number) => {
//     setActiveId(activeId === id ? null : id)
//   }

//   return (
//     <section className="section faq">
//       <div className="container">
//         <div className="section-title">
//           <h2>Perguntas Frequentes</h2>
//           <p>Tire suas dúvidas sobre cuidados com coelhos</p>
//         </div>
        
//         <div className="faq-container">
//           {faqs.map((faq) => (
//             <motion.div 
//               key={faq.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
//             >
//               <div 
//                 className="faq-question" 
//                 onClick={() => toggleFAQ(faq.id)}
//               >
//                 <span>{faq.question}</span>
//                 <motion.i 
//                   className="fas fa-chevron-down"
//                   animate={{ rotate: activeId === faq.id ? 180 : 0 }}
//                 />
//               </div>
              
//               <AnimatePresence>
//                 {activeId === faq.id && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="faq-answer"
//                   >
//                     <p>{faq.answer}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }