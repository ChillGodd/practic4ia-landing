import { Button } from "./button";
import { ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="./assets/logo.png"
                alt="Profesional exitoso"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-[#F4A261] text-[#F4A261]" />
              ))}
              <span className="ml-2 text-sm text-white/80">
                Valorado por +500 estudiantes
              </span>
            </div>
            
            <h2 
              className="text-3xl md:text-4xl mb-6" 
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Deja de sufrir por las entregas
            </h2>
            
            <p className="text-xl mb-8 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
              Conviértete en el practicante que todos quieren contratar. 
              Con Practic4IA, no solo cumples, destacas.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2A9D8F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Respuestas personalizadas a tu situación específica
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2A9D8F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Disponible cuando más lo necesitas, 24/7
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2A9D8F] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Confianza para entregar trabajos de calidad
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#E63946] hover:bg-[#d42838] text-white px-8 py-6 text-lg"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Comienza gratis ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Ver demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
