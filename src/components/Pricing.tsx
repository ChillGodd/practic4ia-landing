import { Button } from "./button";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="precios" className="bg-[#F8F9FA] py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl mb-4" 
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1A1A1A' }}
          >
            Planes flexibles para salvar tu entrega (y tu ciclo)
          </h2>
          <p className="text-lg text-gray-700 mb-16" style={{ fontFamily: 'Inter, sans-serif' }}>
            Empieza gratis. Sin compromisos. Paga solo por lo que necesitas, cuando lo necesitas.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          
          {/* Plan Gratuito */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <span 
                className="uppercase" 
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#2A9D8F' }}
              >
                Prueba Gratuita
              </span>
              <h3 
                className="text-4xl my-4" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#1A1A1A' }}
              >
                $0
                <span className="text-lg text-gray-500" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  {" "}/ 7 días
                </span>
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Prueba todo el poder de Practic4IA. Sin tarjeta de crédito.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  Acceso total a la IA Contextual
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  10 consultas por WhatsApp
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  Generador de plantillas
                </li>
              </ul>
            </div>
            <Button 
              variant="outline"
              className="mt-8 w-full border-2 border-[#2A9D8F] text-[#2A9D8F] hover:bg-[#2A9D8F] hover:text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Empieza Gratis Ahora
            </Button>
          </div>
          
          {/* Plan Mensual (Destacado) */}
          <div className="w-full lg:w-1/3 bg-[#1A1A1A] text-white p-8 rounded-lg shadow-2xl flex flex-col -my-4 lg:my-0 lg:scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F4A261] text-white px-4 py-1 rounded-full text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              Recomendado
            </div>
            <span 
              className="uppercase mt-2" 
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#F4A261' }}
            >
              Plan Mensual
            </span>
            <h3 
              className="text-4xl my-4" 
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
            >
              $11
              <span className="text-lg text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                {" "}/ mes
              </span>
            </h3>
            <p className="text-gray-300 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ideal para salvar el ciclo. Tranquilidad 24/7.
            </p>
            <ul className="space-y-3 text-gray-200 flex-grow">
              <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                Consultas <span style={{ fontWeight: 700, color: '#F4A261' }} className="ml-1">ilimitadas</span>
              </li>
              <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                Integración total con WhatsApp
              </li>
              <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                Validación Emocional 24/7
              </li>
              <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                Mentoría de IA prioritaria
              </li>
            </ul>
            <Button 
              className="mt-8 w-full bg-[#E63946] hover:bg-[#d42838] text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Elegir Plan Mensual
            </Button>
          </div>
          
          {/* Plan Semanal */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <span 
                className="uppercase" 
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#2A9D8F' }}
              >
                Plan Semanal
              </span>
              <h3 
                className="text-4xl my-4" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#1A1A1A' }}
              >
                $3
                <span className="text-lg text-gray-500" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  {" "}/ semana
                </span>
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Perfecto para salvar esa entrega urgente o un examen final.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  50 consultas contextuales
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  Acceso vía App y WhatsApp
                </li>
                <li className="flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="w-5 h-5 rounded-full bg-[#2A9D8F] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  Pago único, sin recurrencia
                </li>
              </ul>
            </div>
            <Button 
              variant="outline"
              className="mt-8 w-full border-2 border-[#2A9D8F] text-[#2A9D8F] hover:bg-[#2A9D8F] hover:text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Salvar mi entrega
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
