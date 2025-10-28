import { MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";



export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <img src="/Logo.png" alt="Practic4IA" className="w-10 h-10 object-contain" />
              <span 
                className="text-xl" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                Practic4IA
              </span>
            </div>
            <p className="text-white/70 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tu asistente técnico personal con IA para prácticas profesionales.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Producto
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Características</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Precios</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Casos de uso</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Recursos
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Guías</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Soporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Contacto
            </h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <MessageCircle className="h-4 w-4" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>WhatsApp</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <Mail className="h-4 w-4" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 Practic4IA. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
