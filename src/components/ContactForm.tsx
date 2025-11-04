"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (form: HTMLFormElement) => {
    const newErrors: Record<string, string> = {};
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const celular = form.celular.value.trim();
    const mensaje = form.mensaje.value.trim();

    // Validar nombre
    if (nombre.length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres.";
    }

    // Validar email con regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Por favor ingresa un correo válido.";
    }

    // Validar celular (solo números y 9 dígitos)
    const phoneRegex = /^[0-9]{9}$/;
    if (!phoneRegex.test(celular)) {
      newErrors.celular = "El celular debe tener exactamente 9 dígitos numéricos.";
    }

    // Validar mensaje
    if (mensaje.length < 5) {
      newErrors.mensaje = "Por favor escribe un mensaje más detallado.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!validateForm(form)) {
      setStatus("⚠️ Por favor corrige los errores antes de enviar.");
      return;
    }

    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/mrboeryl", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("✅ ¡Gracias! Te contactaremos pronto.");
      form.reset();
      setErrors({});
    } else {
      setStatus("❌ Error al enviar. Inténtalo de nuevo.");
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2
          className="text-4xl md:text-5xl mb-3"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            color: "#1A1A1A",
          }}
        >
          ¿Requieres más información?
        </h2>
        <p
          className="text-lg text-gray-600 mb-10"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Tu mentor 24/7, a un mensaje de distancia.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4 text-left">
          <div>
            <input
              name="nombre"
              placeholder="Nombre"
              required
              className={`p-4 rounded-md border ${
                errors.nombre ? "border-red-500" : "border-gray-200"
              } bg-white focus:outline-none focus:ring-2 focus:ring-rose-400 w-full`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              required
              className={`p-4 rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } bg-white focus:outline-none focus:ring-2 focus:ring-rose-400 w-full`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="celular"
              type="tel"
              placeholder="Celular (9 dígitos)"
              required
              className={`p-4 rounded-md border ${
                errors.celular ? "border-red-500" : "border-gray-200"
              } bg-white focus:outline-none focus:ring-2 focus:ring-rose-400 w-full`}
            />
            {errors.celular && (
              <p className="text-red-500 text-sm mt-1">{errors.celular}</p>
            )}
          </div>

          

          <button
            type="submit"
            className="bg-[#E63946] hover:bg-[#d42838] text-white p-4 rounded-md font-semibold"
          >
            Enviar
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 text-sm ${
              status.startsWith("✅")
                ? "text-green-600"
                : status.startsWith("❌")
                ? "text-red-600"
                : "text-yellow-600"
            }`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
