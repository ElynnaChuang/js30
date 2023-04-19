import { useRef, useState, useEffect } from 'react';

export const CanvasArea = () => {
  const [isDraw, setIsDraw] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [strokeStart, setStrokeStart] = useState({ x: 0, y: 0 });
  const [canvasSize, setCanvasSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const [hue, setHue] = useState(0);
  const [lineWidth, setLineWidth] = useState(1);
  const [isWidthThicken, setIsWidthThicken] = useState(true);
  const canvasRef = useRef(null);

  const handleMouseMove = event => {
    event.stopPropagation();
    if (!isDraw) return false;

    const { offsetX, offsetY } = event.nativeEvent;
    setStrokeStart({ x: offsetX, y: offsetY });
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    ctx.moveTo(strokeStart.x, strokeStart.y);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    if (lineWidth >= 100) {
      setIsWidthThicken(false);
    } else if (lineWidth <= 0) {
      setIsWidthThicken(true);
    }
    if (isWidthThicken) {
      setLineWidth(prev => prev + 1);
    } else {
      setLineWidth(prev => prev - 1);
    }
    if (hue >= 360) setHue(0);
    return setHue(prev => prev + 2);
  };

  const handleMouseDown = event => {
    event.stopPropagation();
    const { offsetX, offsetY } = event.nativeEvent;

    setIsDraw(true);
    setStrokeStart({ x: offsetX, y: offsetY });
  };

  useEffect(() => {
    const newCtx = canvasRef.current.getContext('2d');
    newCtx.strokeStyle = '#e1e1e1';
    newCtx.lineJoin = 'round';
    newCtx.lineCap = 'round';
    newCtx.lineWidth = lineWidth;

    setCtx(newCtx);

    window.addEventListener(
      'resize',
      () => {
        setCanvasSize({
          w: window.innerWidth,
          h: window.innerHeight,
        });
      },
      false,
    );
  }, [lineWidth]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.w}
      height={canvasSize.h}
      style={{ backgroundColor: '#fff' }}
      onMouseMove={e => handleMouseMove(e)}
      onMouseDown={e => handleMouseDown(e)}
      onMouseUp={() => setIsDraw(false)}
    />
  );
};
