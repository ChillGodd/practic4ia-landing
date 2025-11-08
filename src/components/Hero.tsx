"use client";
import React, { useState } from "react";

export function Hero() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mrboeryl", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("✅ ¡Gracias! Te contactaremos pronto.");
      form.reset();
    } else {
      setStatus("❌ Error al enviar. Inténtalo de nuevo.");
    }
  };

  return (
    <section
      id="inicio"
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-[90vh] overflow-hidden bg-white"
    >
      {/* Imagen lado izquierdo RESPONSIVE */}
      <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto">
        <img
          src="/hero-buyer.png"
          alt="Joven estudiante mirando hacia la derecha con mochila"
          className="
            w-full h-full object-cover
            object-[40%_center] sm:object-[35%_center] lg:object-[25%_center]
          "
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Contenido principal (texto + formulario) */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 py-12">
        {/* Texto */}
        <div className="text-white lg:text-left text-center mb-10 max-w-lg">
    <span className="inline-block mb-4 px-4 py-2 bg-black/10 backdrop-blur rounded-full text-sm text-[#1A1A1A]">
            Tu asistente técnico personal con IA
          </span>
          <h1
             className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
             style={{ fontFamily: "Montserrat, sans-serif", color: "#1A1A1A" }}
          >
            ¿Abrumado por tus prácticas?
          </h1>
          <p
            className="inline-block mb-4 px-4 py-2 bg-black/10 backdrop-blur rounded-full text-sm text-[#1A1A1A]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Entendemos tu estrés, tu curso y hasta lo que te pide tu jefe.
            Recibe soluciones reales, no solo teoría.
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-8 border border-rose-200 w-full max-w-md mx-auto lg:mx-0">
          <h2
            className="text-2xl md:text-3xl font-bold mb-2 text-[#1A1A1A]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Regístrate para más información
          </h2>
          <p
            className="text-gray-600 mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Respuesta rápida. Sin tarjeta de crédito.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4 text-left">
            <input
              name="nombre"
              placeholder="Nombre"
              required
              minLength={2}
              className="p-4 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Correo"
              required
              className="p-4 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <input
              name="celular"
              type="tel"
              placeholder="whatsapp (9 dígitos)"
              required
              pattern="^[0-9]{9}$"
              title="Ingresa un número de 9 dígitos"
              className="p-4 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400"
            />

            <button
              type="submit"
              className="bg-[#E63946] hover:bg-[#d42838] text-white p-4 rounded-md font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Enviar
            </button>
          </form>

          {status && (
            <p
              className="mt-4 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
