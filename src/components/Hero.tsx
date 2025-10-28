import { Button } from "./button";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    // ⬇️ Fondo rojo limpio, sin textura radial
    <section className="relative bg-[#E63946] pt-24 pb-24 md:pt-28 md:pb-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Badge (delgado, centrado) */}
        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/15">
          <p className="text-xs sm:text-sm tracking-wide">
            Tu asistente técnico personal con IA
          </p>
        </div>

        {/* Título grande como la imagen 1 */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          ¿Abrumado por tus prácticas?
        </h1>

        {/* Subtítulo en dos líneas */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
          <span className="block">Entendemos tu estrés, tu curso y hasta lo que te pide tu jefe.</span>
          <span className="block">Recibe soluciones reales, no solo teoría.</span>
        </p>

        {/* Botones alineados al centro */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-[#E63946] hover:bg-gray-100 px-8 py-6 text-lg"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Empieza por WhatsApp
          </Button>

          {/* Lleva al formulario (#contacto) */}
          <a href="#contacto">
            <Button
  size="lg"
  variant="outline"
  onClick={() =>
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }
  className="px-8 py-6 text-lg" // opcional, no cambia colores
  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
>
  Conoce más
</Button>
          </a>
        </div>

        {/* Nota inferior */}
        <p className="mt-8 text-sm text-white/80">
          Disponible 24/7 · Sin tarjeta de crédito para empezar
        </p>
      </div>
    </section>
  );
}
