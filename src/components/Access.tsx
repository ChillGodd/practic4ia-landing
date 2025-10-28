import { Smartphone, MessageCircle, Zap } from "lucide-react";
import { Button } from "./button";

export function Access() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl mb-4" 
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#1A1A1A' }}
          >
            Accede desde donde estés
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tu mentor 24/7, en la plataforma que prefieras
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 p-8 rounded-2xl border-2 border-[#25D366]/20 hover:border-[#25D366]/40 transition-all">
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 
              className="text-2xl mb-3" 
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#1A1A1A' }}
            >
              WhatsApp
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Inicia una conversación directo desde tu app favorita. Sin descargas, sin complicaciones.
            </p>
            <div className="flex items-center gap-2 text-[#25D366]">
              <Zap className="h-4 w-4" />
              <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Respuesta instantánea
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#E63946]/10 to-[#E63946]/5 p-8 rounded-2xl border-2 border-[#E63946]/20 hover:border-[#E63946]/40 transition-all">
            <div className="w-16 h-16 bg-[#E63946] rounded-2xl flex items-center justify-center mb-6">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h3 
              className="text-2xl mb-3" 
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#1A1A1A' }}
            >
              App Web Ligera
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Accede desde cualquier navegador con todas las funcionalidades avanzadas.
            </p>
            <div className="flex items-center gap-2 text-[#E63946]">
              <Zap className="h-4 w-4" />
              <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Historial completo
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-[#E63946] hover:bg-[#d42838] text-white px-8 py-6 text-lg"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Prueba gratis ahora
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            No necesitas tarjeta de crédito
          </p>
        </div>
      </div>
    </section>
  );
}
