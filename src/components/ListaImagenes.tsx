import { useSearchParams } from 'react-router-dom'; 
import { useImages } from '../hooks/useImages';
import { TarjetaImagen } from './TarjetaImagen';

export const ListaImagenes = () => {
  const [searchParams] = useSearchParams();
  
  const busqueda = searchParams.get('q') || 'Tigers';

  const { data: imagenes, isLoading, isError, error } = useImages(busqueda);

  if (isLoading) return <h2 style={{textAlign: 'center', marginTop: '2rem'}}>Buscando "{busqueda}"...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div className="lista-imagenes-container">
      {}
      <h1 style={{ textTransform: 'capitalize' }}>Resultados para: {busqueda}</h1>
      
      <div className="grid-imagenes">
        {imagenes?.map((img) => (
          <TarjetaImagen key={img.id} imagen={img} />
        ))}
      </div>
      
      {}
      {imagenes?.length === 0 && <p>No se encontraron imágenes.</p>}
    </div>
  );
};