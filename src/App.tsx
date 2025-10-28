// App.tsx
import "../src/assets/styles/globals.css";


import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Features />
      <Pricing />
      <ContactForm />   {/* ← NUEVO */}
      <FinalCTA />
      <Footer />
    </>
  );
}

