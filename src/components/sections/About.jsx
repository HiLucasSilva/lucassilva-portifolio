import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["Html", "Css", "JavaScript", "ReactJs", "TypeScript", "TailwindCSS"];

  const backendSkills = ["Node.js", "Python"];

  const toolsSkills = [ "VSCode", "Figma", "Canva", "PowerBi", "Git", "GitHub", "Docker"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Sobre mim
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Desenvolvedor entusiasta com experiência na criação de aplicações web escaláveis e foco em soluções criativas que unem performance, usabilidade e inovação.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💻 Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🌐 Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🛠️ Ferramentas</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📖 Formação </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Sistemas de Informação </strong> - Rede Doctum  
                  (2021-2025)
                </li>
                
                <li>
                  Cursos Extras: Html, Css, ReactJs, JavaScript, Python, PowerBi, Figma.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Experiências Profissionais </h3>
              <div className="space-y-4 text-gray-300">

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Auxiliar Administrativo em Colégio Privado (2021 - Atual)
                    {" "}
                  </h4>
                  <p>
                    
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};