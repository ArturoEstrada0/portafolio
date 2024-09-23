import { useState, useRef } from 'react';

const useCursorEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [bubblePosition, setBubblePosition] = useState({ x: -100, y: -100 });
  const [isStretching, setIsStretching] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsStretching(false); // Reiniciar el estiramiento cuando el cursor sale
    clearTimeout(timeoutRef.current); // Limpiar el timeout
  };

  const handleMouseMove = (e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;

    // Establecer posición de la burbuja
    setBubblePosition({ x: offsetX - 30, y: offsetY - 30 });

    // Detectar dirección del movimiento del cursor
    if (!isStretching) {
      setIsStretching(true); // Activar el estiramiento inicial
    }

    // Reiniciar el timeout para volver a la forma original después de 100ms
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsStretching(false);
    }, 100);
  };

  return {
    isHovered,
    bubblePosition,
    isStretching,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
};

export default useCursorEffect;