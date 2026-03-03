import type { PexelsApiResponse } from '../api/imagenesPexel';
import type { PexelsPhoto } from '../api/imagenesPexel';

export interface ImagenAdaptada {
  id: number;
  url: string;
  descripcion: string; 
  fotografo: string; 
}


export const adaptarImagenes = (
  dataRaw: PexelsApiResponse
): ImagenAdaptada[] => {
  
  const imagenesAdaptadas: ImagenAdaptada[] = dataRaw.photos.map(
    (foto: PexelsPhoto) => {
      return {
        id: foto.id,
        url: foto.src.medium, 
        descripcion: foto.alt,
        fotografo: foto.photographer,
      };
    }
  );

  return imagenesAdaptadas;
};