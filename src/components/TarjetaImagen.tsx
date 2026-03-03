import React from 'react';
import type { ImagenAdaptada } from '../adapters/imagenesAdapter';

type TarjetaImagenProps = {
  imagen: ImagenAdaptada;
};

export const TarjetaImagen: React.FC<TarjetaImagenProps> = ({ imagen }) => {
  return (
    <div className="tarjeta-imagen">
      <img src={imagen.url} alt={imagen.descripcion} loading="lazy" />
      <div className="tarjeta-info">
        <p>
          <strong>Fotógrafo:</strong> {imagen.fotografo}
        </p>
        <p>
          <em>{imagen.descripcion}</em>
        </p>
      </div>
    </div>
  );
};