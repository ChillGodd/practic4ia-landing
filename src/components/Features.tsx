import { Clock, BookOpen, Target, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Respuestas 24/7",
    description: "Tu mentor personal disponible a cualquier hora, cuando más lo necesitas.",
    color: "#E63946"
  },
  {
    icon: BookOpen,
    title: "Ejemplos prácticos",
    description: "No solo teoría. Recibe soluciones reales aplicables a tu situación específica.",
    color: "#2A9D8F"
  },
  {
    icon: Target,
    title: "Plantillas listas",
    description: "Accede a recursos y plantillas que te ayudarán a entregar con confianza.",
    color: "#E63946"
  },
  {
    icon: CheckCircle2,
    title: "Validación experta",
    description: "Obtén la seguridad que necesitas para presentar tu trabajo sin dudas.",
    color: "#2A9D8F"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1A1A1A' }}>
            A diferencia de otras IA
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Practic4IA está diseñado específicamente para estudiantes que trabajan. 
            Te entendemos y te damos lo que realmente necesitas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl border-2 border-gray-100 hover:border-[#E63946]/20 hover:shadow-lg transition-all duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color: feature.color }} />
                </div>
                <h3 
                  className="mb-3" 
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#1A1A1A' }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
