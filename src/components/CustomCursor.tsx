import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleLinkHover);
    window.addEventListener('mouseout', handleLinkHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleLinkHover);
      window.removeEventListener('mouseout', handleLinkHover);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
          opacity: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isClicking ? 0.5 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.2,
        }}
      >
        <div className="w-full h-full border-2 border-white rounded-full" />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.2 : 1,
          opacity: isClicking ? 0.4 : 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          mass: 0.1,
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>
    </>
  );
};

export default CustomCursor; 