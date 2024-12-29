'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20 md:py-32 relative">
      {/* Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Desenvolvendo soluções digitais{' '}
          <span className="text-purple-500">modernas e eficientes</span>{' '}
          para o seu negócio.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl">
          Desenvolvedor Full Stack com experiência em criar aplicações web
          de alta qualidade e performance.
        </p>
        <a
          href="https://wa.me/5533991991085"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-500 text-white px-8 py-3 rounded-md hover:bg-purple-600 transition-colors duration-300"
        >
          Solicitar serviço
        </a>
      </motion.div>

      {/* Efeito de Bloco de Código (Terminal ou Editor) */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 100 100"
        >
          {/* Bloco de código melhorado com mais elementos */}
          <text
            x="10"
            y="30"
            fontFamily="monospace"
            fontSize="10"
            fill="#A855F7"
            opacity="0.8"
          >
          </text>
          <text
            x="10"
            y="50"
            fontFamily="monospace"
            fontSize="10"
            fill="#6366F1"
            opacity="0.8"
          >
            const heroMessage = &apos;Bem-vindo ao futuro!&apos;
          </text>
          <text
            x="10"
            y="70"
            fontFamily="monospace"
            fontSize="10"
            fill="#A855F7"
            opacity="0.8"
          >
            function renderMessage() &#123;
          </text>
          <text
            x="10"
            y="90"
            fontFamily="monospace"
            fontSize="10"
            fill="#6366F1"
            opacity="0.8"
          >
            return heroMessage
          </text>
          <text
            x="10"
            y="110"
            fontFamily="monospace"
            fontSize="10"
            fill="#A855F7"
            opacity="0.8"
          >
            &#125;
          </text>
          <text
            x="10"
            y="130"
            fontFamily="monospace"
            fontSize="10"
            fill="#6366F1"
            opacity="0.8"
          >
            &lt;button&gt; Solicitar serviço &lt;/button&gt;
          </text>
        </svg>
      </motion.div>
    </section>
  )
}
