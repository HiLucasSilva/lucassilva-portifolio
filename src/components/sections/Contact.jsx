import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin } from "lucide-react";

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
      .catch(() => alert("Ops! Algo deu errado. Tente novamente."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto px-4 w-full min-w-[300px] md:w-3/4 lg:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Entre em contato
          </h2>

          {/* Layout principal: bloco + formulário lado a lado */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            
            {/* Bloco de informações */}
            <div className="flex flex-col space-y-6 flex-1   border-white/10 rounded-xl p-8 shadow-lg">
              <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-500 mr-4" />
                <div>
                  <p className="font-semibold text-gray-100">Email</p>
                  <p className="text-gray-400">lucassilvadevx@gmail.com</p>
                </div>
              </div>

            <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <p className="font-semibold text-gray-100">Telefone</p>
                <p className="text-gray-400">(32) 00000-0000</p>
              </div>
            </div>

            <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <p className="font-semibold text-gray-100">Localização</p>
                <p className="text-gray-400">Cataguases, MG</p>
              </div>
            </div>
          </div>

            {/* Formulário */}
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg w-300">
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
        </div>
      </RevealOnScroll>
    </section>
  );
};
