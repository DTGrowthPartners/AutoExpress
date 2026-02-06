"use client";

import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackCTA } from "@/lib/track";
import FadeIn from "@/components/motion/FadeIn";
import StaggerWords from "@/components/motion/StaggerWords";
import AccentLine from "@/components/motion/AccentLine";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Contact Section */}
      <section id="contacto" className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <StaggerWords
              text="Contacto"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold"
            />
            <AccentLine />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 flex-shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Dirección</h3>
                    <p className="text-sm text-text-secondary mt-1">
                      Cra. 83 #26-18, Medellín, Cartagena de Indias, Bolívar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 flex-shrink-0">
                    <Clock size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Horarios</h3>
                    <p className="text-sm text-text-secondary mt-1">
                      Lunes a Viernes: 8:00 – 12:00 / 14:00 – 17:00
                      <br />
                      Sábados: 8:00 – 12:30
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">WhatsApp</h3>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCTA("whatsapp_contacto")}
                      className="text-sm text-whatsapp hover:text-whatsapp/80 transition-colors mt-1 inline-block"
                    >
                      +57 318 206 6879
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 flex-shrink-0">
                    <Instagram size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Instagram</h3>
                    {/* TODO: reemplazar con link real de Instagram */}
                    <a
                      href="https://instagram.com/autoexpressctg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-white transition-colors mt-1 inline-block"
                    >
                      @autoexpressctg
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Google Maps */}
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <div className="bg-surface border border-border rounded-card overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.48855539906!2d-75.4685994!3d10.3827167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625865b88f375%3A0x6fd6038591599cd2!2sAUTO%20EXPRESS%20CENTRO%20DE%20COLISION%20Y%20DETALLADO!5e0!3m2!1ses-419!2sco!4v1770395180422!5m2!1ses-419!2sco"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Auto Express en Google Maps"
                    className="w-full"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/place/AUTO+EXPRESS+CENTRO+DE+COLISION+Y+DETALLADO/@10.3827167,-75.4685994,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <MapPin size={16} />
                  Ver en Google Maps
                </a>

                {/* Waze */}
                <div className="bg-surface border border-border rounded-card overflow-hidden">
                  <iframe
                    src="https://embed.waze.com/iframe?zoom=16&lat=10.382717&lon=-75.468599&ct=livemap"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Ubicación de Auto Express en Waze"
                    className="w-full"
                  />
                </div>
                <a
                  href="https://www.waze.com/ul?ll=10.382717,-75.468599&navigate=yes&zoom=16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#33CCFF] text-black text-sm font-medium rounded-lg hover:bg-[#33CCFF]/90 transition-colors"
                >
                  <MapPin size={16} />
                  Ver en Waze
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
              <a href="#hero" className="hover:text-white transition-colors">
                Inicio
              </a>
              <a
                href="#servicios"
                className="hover:text-white transition-colors"
              >
                Servicios
              </a>
              <a
                href="#resultados"
                className="hover:text-white transition-colors"
              >
                Resultados
              </a>
              <a
                href="#contacto"
                className="hover:text-white transition-colors"
              >
                Contacto
              </a>
              {/* TODO: reemplazar con link real de Instagram */}
              <a
                href="https://instagram.com/autoexpressctg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Instagram size={14} />
                Instagram
              </a>
            </div>

            <p className="text-xs text-muted">
              &copy; {currentYear} Auto Express Cartagena. Todos los derechos
              reservados. Desarrollado con tecnología propia por{" "}
              <a
                href="https://dtgrowthpartners.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors underline"
              >
                DT Growth Partners
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
