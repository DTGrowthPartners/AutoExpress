// Número de WhatsApp — cambiar aquí para actualizar toda la landing
const WHATSAPP_NUMBER = "573182066879";

interface WhatsAppLinkOptions {
  service?: string;
}

export function getWhatsAppLink({ service }: WhatsAppLinkOptions = {}): string {
  const message = service
    ? `Hola, vengo de la web de Auto Express. Quiero cotizar: ${service}. Mi vehículo es: ____. Estoy en: ____. ¿Me ayudas?`
    : `Hola, vengo de la web de Auto Express. Quiero una cotización. Mi vehículo es: ____. Estoy en: ____. ¿Me ayudas?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
