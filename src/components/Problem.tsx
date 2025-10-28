  import { AlertCircle, Brain, Users } from "lucide-react";
  import { ImageWithFallback } from "./ImageWithFallback";

  export function Problem() {
    return (
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4A261]/10 rounded-full mb-6">
                <AlertCircle className="h-4 w-4 text-[#F4A261]" />
                <span className="text-sm" style={{ color: '#F4A261', fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                  Sabemos lo que enfrentas
                </span>
              </div>
              
              <h2 
                className="text-3xl md:text-4xl mb-6" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1A1A1A' }}
              >
                Estudiante de día, practicante de noche
              </h2>
              
              <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Sabemos que haces malabares entre clases, entregas y las expectativas de tu jefe. 
                El estrés es real y el tiempo nunca alcanza.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#E63946]/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-[#E63946]" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#1A1A1A' }}>
                      Entendemos tu contexto
                    </h4>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      No solo respondemos preguntas, comprendemos tu carrera y tus desafíos específicos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-[#2A9D8F]" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#1A1A1A' }}>
                      Soluciones del mundo real
                    </h4>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Olvídate de respuestas genéricas. Te damos lo que realmente puedes aplicar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653539465770-2d7120d830bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd29ya2luZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjE1NjgzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Estudiante trabajando"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#E63946] text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  "Ahora entrego mis proyectos con confianza"
                </p>
                <p className="text-sm text-white/80 mt-2">- María, Ing. de Sistemas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
