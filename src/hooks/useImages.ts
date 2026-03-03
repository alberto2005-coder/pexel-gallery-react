import { useQuery } from '@tanstack/react-query';
import { fetchImages } from '../api/imagenesPexel';
import { adaptarImagenes } from '../adapters/imagenesAdapter';

export const useImages = (textoBusqueda: string) => {
  return useQuery({
    queryKey: ['images', textoBusqueda], 
    
    queryFn: () => fetchImages(textoBusqueda),
    
    select: adaptarImagenes,
    enabled: textoBusqueda.length > 0, 
  });
};