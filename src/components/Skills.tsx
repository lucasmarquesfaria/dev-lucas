import { FaCode, FaDatabase, FaServer, FaPalette } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    { name: 'Frontend', icon: FaCode, skills: ['JavaScript', 'Next.js', 'TailwindCSS'] },
    { name: 'Backend', icon: FaServer, skills: ['PHP', 'Laravel', 'Java', 'C'] },
    { name: 'Database', icon: FaDatabase, skills: ['MySQL'] },
    { name: 'Design', icon: FaPalette, skills: ['UI/UX', 'Responsive Design'] },
  ]

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900 opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg transform hover:scale-105 transition duration-300">
              <category.icon className="text-blue-400 w-16 h-16 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold text-center mb-4">{category.name}</h3>
              <ul className="text-center">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="mb-2 text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

