export interface PexelsApiResponse {
  photos: PexelsPhoto[];
  total_results: number;
}

export interface PexelsPhoto {
  id: number;
  photographer: string;
  alt: string; 
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}


const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1';

export const fetchImages = async (
  query: string
): Promise<PexelsApiResponse> => {
  if (!API_KEY) {
    throw new Error('Pexels API Key no encontrada');
  }

  const response = await fetch(
    `${BASE_URL}/search?query=${query}&per_page=10`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Error al obtener los datos de Pexels');
  }

  return response.json();
};