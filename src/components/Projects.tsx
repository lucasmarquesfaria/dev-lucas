'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Projeto Perdanet',
    description: 'Sistema de gestão para prevenir perdas de vendas e controlar itens sem cadastro no setor de autopeças.',
    tech: ['Laravel', 'TailwindCSS', 'MySQL', 'JavaScript'],
    link: '#'
  },
  {
    title: 'Código Certo Coders',
    description: 'Comunidade dedicada a ajudar iniciantes na área de tecnologia, promovendo a inclusão digital.',
    tech: ['Next.js', 'Spring Boot', 'MySQL', 'Git'],
    link: '#'
  },
  {
    title: 'VolunDev',
    description: 'Projeto voluntário que oferece soluções tecnológicas gratuitas para projetos sociais.',
    tech: ['Laravel', 'Vue', 'TailwindCSS', 'MySQL'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12">Projetos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-sm px-3 py-1 bg-gray-800 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-purple-500 hover:text-purple-400 transition-colors duration-300"
            >
              Ver projeto →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

