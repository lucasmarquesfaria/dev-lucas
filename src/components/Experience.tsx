// Importar apenas o que está sendo utilizado
import { FaCalendar } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack – Voluntário',
      company: 'Código Certo Coders',
      period: 'março 2023 — O momento',
      description: 'Comunidade dedicada a ajudar iniciantes na área de tecnologia, promovendo a inclusão digital e oferecendo suporte em projetos de programação e desenvolvimento de software.',
      technologies: ['Jira', 'Spring Boot', 'Swagger', 'Git', 'Figma', 'Laravel', 'NextJS', 'MySQL']
    },
    {
      title: 'Desenvolvedor Full Stack com foco Frontend – Voluntário',
      company: 'VolunDev',
      period: 'dezembro 2023 — O momento',
      description: 'Projeto voluntário que oferece soluções tecnológicas gratuitas para projetos sociais. Atuo em projetos no geral, que são passados em forma empresarial para que todos os integrantes possam obter técnicas em todas as áreas.',
      technologies: ['Jira', 'Git', 'Figma', 'Laravel', 'Vue', 'TailwindCSS', 'Inertia', 'MySQL', 'PHPUnit', 'Laravel Jetstream']
    },
    {
      title: 'Projeto - Perdanet',
      company: '',
      period: 'fevereiro 2024',
      description: 'Sistema de gestão para prevenir perdas de vendas e controlar itens sem cadastro no setor de autopeças.',
      technologies: ['Framework Laravel', 'TailwindCSS', 'MySQL', 'JavaScript']
    }
  ];

  return (
    <section id="experiencia" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-gray-900 opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Experiência Profissional</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-blue-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4 flex items-center">
                <FaCalendar className="mr-2" /> {exp.period}
              </p>
              <p className="mb-4 text-gray-300">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-900 bg-opacity-50 text-blue-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
