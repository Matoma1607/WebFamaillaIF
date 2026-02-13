
import { GalleryItem, FeatureItem, MatchItem } from './types';

export const CLUB_NAME = "FAMAILLA IF";
export const WHATSAPP_NUMBER = "5493814684482";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Famailla%20IF,%20quiero%20información%20sobre%20las%20inscripciones`;

// URLs para fácil reemplazo
export const LOGO_URL = "https://i.postimg.cc/k52Y04V9/Gemini-Generated-Image-lau568lau568lau5.png"; 
export const HERO_BG_URL = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000";
export const PARALLAX_BG_URL = "https://i.postimg.cc/SNcMtGTG/Whats_App_Image_2026_02_11_at_17_27_07_(1).jpg";

export const LOCATIONS = [
  {
    name: "LA CANCHA DE BANDA - B SAN MIGUEL ARCANGEL",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.3051134669926!2d-65.39039533043749!3d-27.054788498535167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94224bc5562a05c3%3A0x5bbc1832021a9503!2sCancha%20B%20San%20Nicolas!5e0!3m2!1ses-419!2sar!4v1771010195427!5m2!1ses-419!2sar"
  },
  {
    name: "FINCA NAPOLES - B TRES ALMACENES (CONSULTAR DIAS Y HORARIOS)",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.7680640856197!2d-65.43172392455608!3d-27.03749397657306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422495f267ad281%3A0x996a01cc397dcabd!2sNapoles!5e0!3m2!1ses-419!2sar!4v1771010294683!5m2!1ses-419!2sar"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { 
    id: 1, 
    url: "https://images.unsplash.com/photo-1526232762683-21751513e336?auto=format&fit=crop&q=80&w=800", 
    alt: "Entrenamiento Técnico" 
  },
  { 
    id: 2, 
    url: "https://images.unsplash.com/photo-1510566339491-97c03bc3789b?auto=format&fit=crop&q=80&w=800", 
    alt: "Trabajo en Equipo" 
  },
  { 
    id: 3, 
    url: "https://images.unsplash.com/photo-1518605336397-90db390039bc?auto=format&fit=crop&q=80&w=800", 
    alt: "Celebración de Goles" 
  },
  { 
    id: 4, 
    url: "https://images.unsplash.com/photo-1431324155629-1a6eda1eedbc?auto=format&fit=crop&q=80&w=800", 
    alt: "Práctica de Porteros" 
  },
  { 
    id: 5, 
    url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800", 
    alt: "Ejercicios de Agilidad" 
  },
  { 
    id: 6, 
    url: "https://images.unsplash.com/photo-1551280857-2b9bbe52cfec?auto=format&fit=crop&q=80&w=800", 
    alt: "Torneo Infantil" 
  },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: "fa-calendar-alt",
    title: "Horarios",
    description: "Lunes a Viernes de 18:30 a 20:00 hs. Entrenamiento intensivo."
  },
  {
    icon: "fa-map-marker-alt",
    title: "Ubicación",
    description: "Nuestras sedes en Famaillá. Haz clic para ver el mapa."
  },
  {
    icon: "fa-futbol",
    title: "Categorías",
    description: "Chupetones, Cebollitas, Infantiles e Inferiores."
  },
  {
    icon: "fa-users",
    title: "Comunidad",
    description: "Valores, respeto y disciplina a través del deporte."
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
