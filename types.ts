
export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface MatchItem {
  id: number;
  fecha: string;
  oponente: string;
  ubicacion: string;
  hora: string;
  categoria: string;
}
