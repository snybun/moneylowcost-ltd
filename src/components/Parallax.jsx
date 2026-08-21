import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

/**
 * Parallax wrapper that smoothly offsets elements along the Y axis based on scroll position.
 * @param {number} speed - Positive moves faster than scroll (upward feel), negative moves slower (downward feel). E.g. 0.2, -0.15, 0.4.
 * @param {Array} offset - Scroll offset trigger range e.g. ["start end", "end start"]
 * @param {number} stiffness - Spring stiffness (default 120)
 * @param {number} damping - Spring damping (default 30)
 */
export function Parallax({
  children,
  speed = 0.2,
  direction = 'vertical',
  scaleRange = [1, 1, 1],
  opacityRange = [1, 1, 1, 1],
  rotateRange = [0, 0],
  enableScale = false,
  enableOpacity = false,
  enableRotate = false,
  offset = ['start end', 'end start'],
  className = '',
  style = {},
  stiffness = 120,
  damping = 30,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness,
    damping,
    restDelta: 0.001,
  });

  // Calculate pixel translation based on speed multiplier
  const maxDistance = 160 * speed;
  const y = useTransform(smoothProgress, [0, 1], [maxDistance, -maxDistance]);
  const x = useTransform(smoothProgress, [0, 1], [maxDistance, -maxDistance]);

  const scale = useTransform(smoothProgress, [0, 0.5, 1], scaleRange);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], opacityRange);
  const rotate = useTransform(smoothProgress, [0, 1], rotateRange);

  const motionStyles = {
    ...(direction === 'vertical' ? { y } : {}),
    ...(direction === 'horizontal' ? { x } : {}),
    ...(direction === 'both' ? { x, y } : {}),
    ...(enableScale ? { scale } : {}),
    ...(enableOpacity ? { opacity } : {}),
    ...(enableRotate ? { rotate } : {}),
    ...style,
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={motionStyles} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * ParallaxFloat combines continuous floating micro-animation with scroll displacement
 */
export function ParallaxFloat({
  children,
  speed = 0.25,
  floatDuration = 6,
  floatDistance = 8,
  floatDelay = 0,
  className = '',
  style = {},
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
  });

  const yScroll = useTransform(smoothProgress, [0, 1], [80 * speed, -80 * speed]);

  return (
    <div ref={ref} className={className} style={style}>
      <motion.div style={{ y: yScroll }}>
        <motion.div
          animate={{ y: [0, -floatDistance, 0] }}
          transition={{
            duration: floatDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: floatDelay,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

/**
 * ParallaxGlow renders a blurred ambient gradient orb with deep scroll parallax
 */
export function ParallaxGlow({
  color = 'from-[#0071E3]/15 to-[#34C759]/10',
  size = 'w-96 h-96',
  speed = -0.15,
  className = '',
  blur = 'blur-3xl',
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
  });

  const y = useTransform(smoothProgress, [0, 1], [100 * speed, -100 * speed]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.15, 0.95]);

  return (
    <div ref={ref} className={`absolute pointer-events-none ${className}`}>
      <motion.div
        style={{ y, scale }}
        className={`${size} rounded-full bg-gradient-to-tr ${color} ${blur} opacity-70`}
      />
    </div>
  );
}

/**
 * ScrollProgressBar creates a top subtle reading progress bar
 */
export function ScrollProgressBar({ className = '' }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0071E3] via-[#34C759] to-[#0071E3] origin-left z-50 pointer-events-none ${className}`}
    />
  );
}

/**
 * ParallaxTilt adds interactive 3D perspective tilt on hover
 */
export function ParallaxTilt({
  children,
  maxTilt = 8,
  className = '',
  style = {},
}) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        ...style,
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: hovered ? rotateX : 0,
          rotateY: hovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full transition-transform duration-150"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Parallax;
