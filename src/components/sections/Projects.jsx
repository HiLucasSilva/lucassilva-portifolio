import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
         Projetos de Destaque
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Trinus</h3>
              <p className="text-gray-400 mb-4">
                O Trinus é uma plataforma digital desenvolvida para apresentar projetos de engenharia e tecnologia de forma moderna, visual e interativa.
                Criado para um grupo de engenheiros, o Trinus une design limpo, arquitetura de código organizada e experiência de usuário fluida, servindo como portfólio profissional coletivo e vitrine de inovação técnica.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJs", "Vite", "TailwindCSS", "Vercel" ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://trinus-iota.vercel.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Qr-Code Generation</h3>
              <p className="text-gray-400 mb-4">
                Este é um web app open source que permite a geração de QR Codes personalizados de forma simples, limpa e eficiente. Com um design responsivo e focado na usabilidade, o sistema possibilita ao usuário inserir texto ou links e receber um código QR estilizado instantaneamente, sem necessidade de login, anúncios ou processos complexos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Next.js", "TypeScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/HiLucasSilva/Qr-Code-Generation"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Validador de Senhas</h3>
              <p className="text-gray-400 mb-4">
                Este é um web app open source que permite validar senhas de forma rápida, intuitiva e eficiente. Com uma interface simples e responsiva, a aplicação verifica automaticamente se a senha informada atende aos critérios mínimos de segurança, como uso de letras maiúsculas, minúsculas, números, caracteres especiais e tamanho mínimo.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Html", "Css", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/HiLucasSilva/Validador-De-Senha"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Finance-Ai</h3>
              <p className="text-gray-400 mb-4">
                Projeto de um Saas usado para a gestão financeira de determinada pessoa ou até mesmo empresa. Projeto que além das tecnologias utilizadas, possui integração com ChatGpt, para desenvolvimento de relatórios financeiros mediante dados fornecido pelo usuário. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "React", "PostegreSQL", "Prisma", "Node.js", "TypeScript", "JavaScript"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/HiLucasSilva/fullstackweek-financeai"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};