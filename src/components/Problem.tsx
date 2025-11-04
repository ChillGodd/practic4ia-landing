import { useEffect, useState } from "react";
import { AlertCircle, Brain, Users, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

type Testimonial = {
  img: string;
  alt: string;
  quote: string;
  author: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    img: "https://images.unsplash.com/photo-1653539465770-2d7120d830bb?auto=format&fit=crop&w=1200&q=80",
    alt: "Estudiante trabajando con laptop en campus",
    quote: "Ahora entrego mis proyectos con confianza",
    author: "Luis Sanchez, Ing. de Sistemas",
  },
  {
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Estudiante tomando notas",
    quote: "Las respuestas son claras y puedo aplicarlas al toque",
    author: "Carlos Martinez, Marketing",
  },
  {
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    alt: "Estudiante en biblioteca",
    quote: "Me ahorró horas cada semana con soluciones concretas",
    author: "Lucía Condori, Contabilidad",
  },
  {
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Estudiante revisando su tablet",
    quote: "Por fin siento que sí llego a todo",
    author: "Andrés Vilchez, Sistemas",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    alt: "Estudiante sonriendo en campus",
    quote: "Me ayuda a entender y presentar mejor mis entregables",
    author: "Valeria Bustamante, Administración",
  },
];

export function Problem() {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);
  const go = (i: number) => setIdx(i);

  // autoplay (puedes quitarlo si no lo deseas)
  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4A261]/10 rounded-full mb-6">
              <AlertCircle className="h-4 w-4 text-[#F4A261]" />
              <span
                className="text-sm"
                style={{
                  color: "#F4A261",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                }}
              >
                Sabemos lo que enfrentas
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                color: "#1A1A1A",
              }}
            >
              Estudiante de día, practicante de noche
            </h2>

            <p
              className="text-lg text-gray-600 mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Sabemos que haces malabares entre clases, entregas y las
              expectativas de tu jefe. El estrés es real y el tiempo nunca
              alcanza.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#E63946]/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 text-[#E63946]" />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      color: "#1A1A1A",
                    }}
                  >
                    Entendemos tu contexto
                  </h4>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    No solo respondemos preguntas, comprendemos tu carrera y tus
                    desafíos específicos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-[#2A9D8F]" />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      color: "#1A1A1A",
                    }}
                  >
                    Soluciones del mundo real
                  </h4>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Olvídate de respuestas genéricas. Te damos lo que realmente
                    puedes aplicar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: carrusel de testimonios */}
<div className="relative flex flex-col items-center">
  {/* Wrapper que da espacio debajo para la tarjeta */}
  <div className="relative w-full" style={{ paddingBottom: "2.75rem" }}>
    {/* SOLO la imagen queda con overflow-hidden para las esquinas */}
    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
      <ImageWithFallback
        key={idx}
        src={t.img}
        alt={t.alt}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
    </div>

    {/* Tarjeta roja POR FUERA del overflow-hidden */}
    <div
      className="absolute left-1/2 -translate-x-1/2 flex items-center justify-between bg-[#E63946] text-white p-6 rounded-xl shadow-xl w-[90%] max-w-xl z-10"
      style={{ bottom: "-1.5rem" }} // lo mismo que -bottom-6
    >
      <div className="flex flex-col">
        <p
          className="font-semibold text-base md:text-lg leading-snug"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          “{t.quote}”
        </p>
        <p className="text-sm text-white/80 mt-1">- {t.author}</p>
      </div>

      {/* Botón siguiente a la derecha */}
      <button
        aria-label="Siguiente testimonio"
        onClick={next}
        className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#E63946] hover:bg-[#E63946] hover:text-white transition"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  </div>

  {/* Dots  */}
  <div className="flex items-center gap-2 justify-center" style={{ marginTop: "2.5rem" }}>
    {TESTIMONIALS.map((_, i) => (
      <button
        key={i}
        onClick={() => go(i)}
        aria-label={`Ir al testimonio ${i + 1}`}
        className={`h-2.5 rounded-full transition-all ${
          i === idx ? "w-6 bg-[#E63946]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
        }`}
      />
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}