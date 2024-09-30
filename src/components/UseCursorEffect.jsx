import { useState, useRef, useEffect } from "react";

const useCursorEffect = () => {
  const [isHovered, setIsHovered] = useState(true);
  const [bubblePosition, setBubblePosition] = useState({ x: -100, y: -100 });
  const [isStretching, setIsStretching] = useState(false);
  const currentElementRef = useRef(null); // Referencia para el elemento actual

  // Función para detectar si el elemento tiene cursor pointer
  const isPointerCursor = (element) => {
    return window.getComputedStyle(element).cursor === "pointer";
  };

  const handleMouseMove = (e) => {
    const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

    // Establecer la posición de la burbuja usando pageX y pageY para compensar el desplazamiento
    setBubblePosition({ x: e.pageX - 15, y: e.pageY - 15 }); // Resta la mitad del tamaño de la burbuja

    if (isPointerCursor(elementUnderCursor)) {
      // Activar el efecto de crecimiento
      setIsStretching(true);
      setIsHovered(true);
    }

    // Si el elemento bajo el cursor ha cambiado y el elemento anterior tenía un cursor de puntero
    if (currentElementRef.current && currentElementRef.current !== elementUnderCursor && isPointerCursor(currentElementRef.current)) {
      // Restablecer el estado
      setIsHovered(true);
      setIsStretching(false);
    }

    // Actualizar el elemento actual
    currentElementRef.current = elementUnderCursor;
  };

  useEffect(() => {
    // Agregar los eventos globales de mouse
    document.addEventListener("mousemove", handleMouseMove);

    // Limpiar los eventos al desmontar el componente
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // El efecto se ejecuta solo una vez, al montar el componente

  return {
    isHovered,
    bubblePosition,
    isStretching,
  };
};

export default useCursorEffect;
