import React from 'react';
import useCursorEffect from './UseCursorEffect';

const CursorBubble = () => {
  const {
    isHovered,
    bubblePosition,
    isStretching,
    bubbleColor,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    handleButtonHover,
  } = useCursorEffect();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', height: '100vh', width: '100vw' }}
    >
      {/* Burbuja de cursor */}
      {isHovered && (
        <div
          className={`bubble-effect ${isStretching ? 'stretch' : ''}`}
          style={{
            top: bubblePosition.y,
            left: bubblePosition.x,
            backgroundColor: bubbleColor, // Aplicar el color dinámico
          }}
        />
      )}

      {/* Botón que cambia el color de la burbuja a azul */}
      <button
        onMouseEnter={handleButtonHover} // Cambiar color a azul al hacer hover
        onMouseLeave={handleMouseLeave}  // Resetear color al salir del botón
        style={{ position: 'absolute', top: '50%', left: '50%', padding: '10px 20px' }}
      >
        Hover Me
      </button>
    </div>
  );
};

export default CursorBubble;
