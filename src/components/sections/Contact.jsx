import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Mensagem enviada!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Ops! Algo deu errado. Tente novamente.")
      );
  };

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

          {/* Contatos diretos */}
          <div className="w-full bg-white/5 border border-white/10 rounded-lg p-6 mb-8 text-white text-center flex flex-col">
            <p className="mb-4 text-sm text-gray-400">
              Caso esteja enfrentando problemas com o envio do formulário, pode entrar em contato através destes links:
            </p>

            <div className="flex flex-col space-y-4">
              <a
                href="mailto:lucas.mendonca.silva@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-md bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-blue-400 mr-3"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Email 1
                </span>
              </a>

              <a
                href="mailto:lucassilvadevx@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-md bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-blue-400 mr-3"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Email 2
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/lucasmendoncasilva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-md bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-blue-400 mr-3"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Linkedin
                </span>
              </a>
            </div>
          </div>

          {/* Formulário */}
          <div className="w-full bg-white/5 border border-white/10 rounded-lg p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Nome..."
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
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="exemplo@gmail.com"
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
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Sua mensagem..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
