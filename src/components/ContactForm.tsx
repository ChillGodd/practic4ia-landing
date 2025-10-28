"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const res = await fetch("https://formspree.io/f/mrboeryl", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) setStatus("✅ ¡Gracias! Te contactaremos pronto.");
    else setStatus("❌ Error al enviar.");
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2
          className="text-4xl md:text-5xl mb-3"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#1A1A1A" }}
        >
          ¿Requieres más información?
        </h2>
        <p className="text-lg text-gray-600 mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
          Tu mentor 24/7, a un mensaje de distancia.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4 text-left">
          <input name="nombre" placeholder="Nombre" required
                 className="p-4 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="email" type="email" placeholder="Correo" required
                 className="p-4 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <textarea name="mensaje" rows={5} placeholder="Mensaje"
                    className="p-4 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <button type="submit"
                  className="bg-[#E63946] hover:bg-[#d42838] text-white p-4 rounded-md font-semibold">
            Enviar
          </button>
        </form>

        {status && <p className="mt-4 text-sm">{status}</p>}
      </div>
    </section>
  );
}
