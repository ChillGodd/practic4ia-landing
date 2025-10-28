import { Button } from "./button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="bg-[#E63946] text-white text-center py-2">
  <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1rem" }}>
    ¿Requieres más información? — 
    <a
      href="#contacto"
      style={{
        textDecoration: "underline",
        marginLeft: "6px",
        color: "white",
      }}
    >
      Contáctanos aquí
    </a>
  </p>
</div>
          
          {/* Marca */}
          <a
            href="#"
            className="flex items-center gap-2 shrink-0 text-[#1A1A1A] no-underline hover:text-[#E63946]"
          >
            {/* Logo chico */}
            <img src="/Logo.png" alt="Practic4IA" className="h-10 w-auto" />
           <span
  className="text-lg md:text-xl tracking-tight text-[#1A1A1A]"
  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
  
>
  Practic4IA
</span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-[#E63946]">Características</a>
            <a href="#how" className="hover:text-[#E63946]">Cómo funciona</a>
            <a href="#pricing" className="hover:text-[#E63946]">Precios</a>
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">Iniciar sesión</Button>
            <Button className="bg-[#E63946] hover:bg-[#d42838] text-white">Probar gratis</Button>
            <button className="md:hidden p-2 rounded-md border border-gray-200">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
