import { FaGraduationCap, FaBook } from 'react-icons/fa'

export default function Education() {
  return (
    <section id="educacao" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900 opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Educação</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-blue-400 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold">Bacharelado em Ciência da Computação</h3>
                <p className="text-gray-400">Doctum Caratinga</p>
              </div>
            </div>
            <p className="text-gray-300">janeiro 2022 à dezembro 2025</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaBook className="text-blue-400 text-4xl mr-4" />
              <h3 className="text-2xl font-semibold">Cursos Extracurriculares</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Alura: Desenvolvimento Web com HTML, CSS E JS</li>
              <li>Udemy: PHP 7 BÁSICO | Desenvolvimento Web com PHP / Laravel 8</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

