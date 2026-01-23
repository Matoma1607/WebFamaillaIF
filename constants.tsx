
import { GalleryItem, FeatureItem, MatchItem } from './types';

export const CLUB_NAME = "FAMAILLA IF";
export const WHATSAPP_NUMBER = "5493814684482";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Famailla%20IF,%20quiero%20información%20sobre%20las%20inscripciones`;

// URLs para fácil reemplazo
export const LOGO_URL = "https://cdn-icons-png.flaticon.com/512/5328/5328024.png"; // Icono de fútbol dorado/blanco
export const HERO_BG_URL = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000";
export const PARALLAX_BG_URL = "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=2000";

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, url: "https://images.unsplash.com/photo-1526232762683-21751513e336?auto=format&fit=crop&q=80&w=800", alt: "Entrenamiento Técnico" },
  { id: 2, url: "https://images.unsplash.com/photo-1510566339491-97c03bc3789b?auto=format&fit=crop&q=80&w=800", alt: "Trabajo en Equipo" },
  { id: 3, url: "https://images.unsplash.com/photo-1518605336397-90db390039bc?auto=format&fit=crop&q=80&w=800", alt: "Celebración" },
  { id: 4, url: "https://images.unsplash.com/photo-1431324155629-1a6eda1eedbc?auto=format&fit=crop&q=80&w=800", alt: "Práctica de Porteros" },
  { id: 5, url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800", alt: "Agilidad" },
  { id: 6, url: "https://images.unsplash.com/photo-1551280857-2b9bbe52cfec?auto=format&fit=crop&q=80&w=800", alt: "Torneo Infantil" },
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
