import useCursorEffect from "./UseCursorEffect";

const BubbleComponent = () => {
  const { isHovered, isClickableHovered, bubblePosition, isStretching } =
    useCursorEffect();

  const bubbleStyle = {
    transform: isStretching ? "scale(1.2)" : "scale(1)",
    backgroundColor: isClickableHovered ? "red" : "blue", // Cambiar el color de la burbuja
    left: `${bubblePosition.x}px`,
    top: `${bubblePosition.y}px`,
  };

  return isHovered ? (
    <div className="bubble" style={bubbleStyle}>
      <button>click</button>
    </div>
  ) : null;
};

export default BubbleComponent;
