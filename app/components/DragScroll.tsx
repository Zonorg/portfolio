"use client";
import { useEffect, useRef } from 'react';

const DragScroll: React.FC = () => {
  const isDraggingRef = useRef(false);
  const lastUpdateTimeRef = useRef(0);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const scrollXRef = useRef(0);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault();

      isDraggingRef.current = true;
      startXRef.current = event.clientX;
      startYRef.current = event.clientY;
      scrollXRef.current = window.scrollX;
      scrollYRef.current = window.scrollY;

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDraggingRef.current) {
        return;
      }

      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTimeRef.current;

      if (deltaTime >= 16) {
        const deltaX = event.clientX - startXRef.current;
        const deltaY = event.clientY - startYRef.current;

        scrollXRef.current -= deltaX;
        scrollYRef.current -= deltaY;

        window.scrollTo(scrollXRef.current, scrollYRef.current);

        lastUpdateTimeRef.current = currentTime;
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return null;
};

export default DragScroll;
