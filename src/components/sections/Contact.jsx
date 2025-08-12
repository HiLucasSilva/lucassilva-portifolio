import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  // Estado do formulário mantido, mas a funcionalidade foi comentada
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto px-4 w-full min-w-[300px] md:w-3/4 lg:w-2/3 p-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Entre em contato
          </h2>
          
          {/* Nova seção para contatos diretos e aviso sobre o formulário */}
          <div className="w-full bg-white/5 border border-white/10 rounded-lg p-6 mb-8 text-white text-center fle ">
          
            <p className="mb-4 text-sm text-gray-400">Caso esteja enfrentando problemas com o envio do formulário, pode estar entrando em contato atravez desses links.</p>
            <div className="flex flex-col space-y-4">
              
              <a href="mailto:seu.email@exemplo.com" className="flex items-center justify-center p-3 rounded-md bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300"><a href="mailto:lucas.mendonca.silva@hotmail.com " target="blank_"></a>Email 1</span>
              </a>

              <a href="mailto:seu.email@exemplo.com" className="flex items-center justify-center p-3 rounded-md bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300"><a href="mailto:lucassilvadevx@gmail.com" target="blank_"></a>Email 2</span>
              </a>

              <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 rounded-md bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300"><a href="https://www.linkedin.com/in/lucasmendoncasilva" target="blank_">Linkedin</a></span>
              </a>

            
            </div>
          </div>
          
          {/* O formulário original permanece desativado */}
          <form className="w-full space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 cursor-not-allowed"
                placeholder="Nome..."
                disabled
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 cursor-not-allowed"
                placeholder="exemplo@gmail.com"
                disabled
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 cursor-not-allowed"
                placeholder="Sua mensagem..."
                disabled
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden disabled:cursor-not-allowed"
              disabled
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
