
import { GalleryItem, FeatureItem, MatchItem } from './types';

export const CLUB_NAME = "FAMAILLA IF";
export const WHATSAPP_NUMBER = "5493814684482";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Famailla%20IF,%20quiero%20información%20sobre%20las%20inscripciones`;

// URLs para fácil reemplazo
export const LOGO_URL = "https://cdn-icons-png.flaticon.com/512/5328/5328024.png"; // Icono de fútbol dorado/blanco
export const HERO_BG_URL = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000";
export const PARALLAX_BG_URL = "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=2000";

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, url: "https://i.postimg.cc/90M2LfF3/Whats-App-Image-2026-01-21-at-11-44-25.jpg", alt: "Entrenamiento Técnico" },
  { id: 2, url: "https://i.postimg.cc/k4w9NS9X/Whats-App-Image-2026-01-21-at-11-44-25-(1).jpg", alt: "Concentración" },
  { id: 3, url: "https://i.postimg.cc/tTDyd6y9/Whats-App-Image-2026-01-21-at-11-44-25-(2).jpg", alt: "Trabajo en Equipo" },
  { id: 4, url: "https://i.postimg.cc/ZRjZPNZ4/Whats-App-Image-2026-01-21-at-11-45-30-(1).jpg", alt: "Destreza" },
  { id: 5, url: "https://i.postimg.cc/tTDyd6yb/Whats-App-Image-2026-01-21-at-11-45-30-(2).jpg", alt: "Agilidad" },
  { id: 6, url: "https://i.postimg.cc/wvFH5NHp/Whats-App-Image-2026-01-21-at-11-45-30-(3).jpg", alt: "Control" },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: "fa-calendar-alt",
    title: "Horarios",
    description: "Lunes a Viernes de 17:00 a 20:00 hs. Categorías desde los 5 hasta los 13 años."
  },
  {
    icon: "fa-map-marker-alt",
    title: "Ubicación",
    description: "Lugar a confirmar."
  },
  {
    icon: "fa-users",
    title: "Comunidad",
    description: "Fomentamos valores de compañerismo, respeto y disciplina a través del deporte."
  }
];

export const PROXIMOS_PARTIDOS: MatchItem[] = [
  {
    id: 1,
    fecha: "Próximamente Confirmaremos",
    oponente: "Rival a Definir",
    ubicacion: "Ubicación a confirmar",
    hora: "Horario a confirmar",
    categoria: "A definir"
  }
];
