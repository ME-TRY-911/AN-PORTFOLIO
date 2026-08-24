import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mousePos = { x: -1000, y: -1000, targetRadius: 220 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNetwork();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mousePos.x = -1000;
      mousePos.y = -1000;
    };

    // Expanding neon shockwave rings on click or move
    interface Shockwave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
    }
    const shockwaves: Shockwave[] = [];

    const handleClick = (e: MouseEvent) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.9,
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Particle nodes definition
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      pulseSpeed: number;
      pulseOffset: number;
      color: string;
      glowColor: string;
      isHub: boolean;
    }

    // High-speed glowing data packets along connection lines
    interface DataPulse {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      size: number;
    }

    // Shooting tech laser meteors
    interface ShootingBeam {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      thickness: number;
      active: boolean;
    }

    let nodes: Node[] = [];
    const pulses: DataPulse[] = [];
    const beams: ShootingBeam[] = [];

    const initNetwork = () => {
      nodes = [];
      const count = Math.min(Math.floor((width * height) / 12000), 75);
      const colorPalettes = [
        { c: 'rgba(0, 240, 255,', g: '#00f0ff' },
        { c: 'rgba(56, 189, 248,', g: '#38bdf8' },
        { c: 'rgba(45, 212, 191,', g: '#2dd4bf' },
        { c: 'rgba(147, 197, 253,', g: '#93c5fd' },
      ];

      for (let i = 0; i < count; i++) {
        const isHub = i % 6 === 0;
        const pal = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isHub ? 0.45 : 0.8),
          vy: (Math.random() - 0.5) * (isHub ? 0.45 : 0.8),
          radius: isHub ? Math.random() * 2.5 + 3.2 : Math.random() * 1.8 + 1.2,
          baseAlpha: isHub ? 0.9 : Math.random() * 0.4 + 0.45,
          pulseSpeed: Math.random() * 0.04 + 0.02,
          pulseOffset: Math.random() * Math.PI * 2,
          color: pal.c,
          glowColor: pal.g,
          isHub,
        });
      }

      // Initialize 5 shooting meteors
      beams.length = 0;
      for (let i = 0; i < 5; i++) {
        resetBeam(i, true);
      }
    };

    const resetBeam = (index: number, initial = false) => {
      beams[index] = {
        x: initial ? Math.random() * width : Math.random() * width * 1.3 - width * 0.15,
        y: initial ? Math.random() * height * 0.7 : -60,
        length: Math.random() * 120 + 90,
        speed: Math.random() * 4.5 + 3.2,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.4 + 0.6,
        thickness: Math.random() * 1.5 + 1.2,
        active: true,
      };
    };

    initNetwork();

    let time = 0;
    let scanLineY = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // --- A. Vertical Cyber Scanline (Laser Diagnostic Sweep) ---
      scanLineY = (scanLineY + 1.2) % (height + 200);
      const scanGrad = ctx.createLinearGradient(0, scanLineY - 80, 0, scanLineY);
      scanGrad.addColorStop(0, 'rgba(0, 240, 255, 0)');
      scanGrad.addColorStop(0.8, 'rgba(0, 240, 255, 0.04)');
      scanGrad.addColorStop(1, 'rgba(0, 240, 255, 0.18)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanLineY - 80, width, 80);

      // --- B. Animated Neon Shockwaves from Clicks ---
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += 3.5;
        sw.alpha -= 0.018;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${sw.alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00f0ff';
        ctx.stroke();
        ctx.restore();
      }

      // --- C. Connection Lines & Constellation Network ---
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = nodeA.isHub || nodeB.isHub ? 175 : 135;

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.42;

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            if (nodeA.isHub || nodeB.isHub) {
              ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha * 1.3})`;
              ctx.lineWidth = 1.1;
            } else {
              ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
              ctx.lineWidth = 0.75;
            }
            ctx.stroke();

            // Spawn bright glowing data pulses along active lines
            if (Math.random() < 0.0018 && pulses.length < 22) {
              pulses.push({
                fromIndex: i,
                toIndex: j,
                progress: 0,
                speed: Math.random() * 0.022 + 0.012,
                size: nodeA.isHub || nodeB.isHub ? 3.5 : 2.4,
              });
            }
          }
        }

        // Magnetic Attraction & High-Intensity Connection to Cursor
        const mdx = nodeA.x - mousePos.x;
        const mdy = nodeA.y - mousePos.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mousePos.targetRadius) {
          const mAlpha = (1 - mDist / mousePos.targetRadius) * 0.85;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${mAlpha})`;
          ctx.lineWidth = 1.8;
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#00f0ff';
          ctx.stroke();
          ctx.restore();

          // Gentle pull toward mouse
          nodeA.x -= (mdx / mDist) * 0.55;
          nodeA.y -= (mdy / mDist) * 0.55;
        }
      }

      // --- D. Animate Glowing Data Pulses ---
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        const from = nodes[pulse.fromIndex];
        const to = nodes[pulse.toIndex];

        if (pulse.progress >= 1 || !from || !to) {
          pulses.splice(p, 1);
          continue;
        }

        const currentX = from.x + (to.x - from.x) * pulse.progress;
        const currentY = from.y + (to.y - from.y) * pulse.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(currentX, currentY, pulse.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 14;
        ctx.shadowColor = '#00f0ff';
        ctx.fill();

        // Outer neon aura for pulse
        ctx.beginPath();
        ctx.arc(currentX, currentY, pulse.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.fill();
        ctx.restore();
      }

      // --- E. Draw Shooting Tech Lasers / Meteors ---
      beams.forEach((beam, idx) => {
        if (!beam.active) return;

        const cosA = Math.cos(beam.angle);
        const sinA = Math.sin(beam.angle);

        const tailX = beam.x - cosA * beam.length;
        const tailY = beam.y - sinA * beam.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, beam.x, beam.y);
        gradient.addColorStop(0, 'rgba(0, 240, 255, 0)');
        gradient.addColorStop(0.6, `rgba(56, 189, 248, ${beam.alpha * 0.7})`);
        gradient.addColorStop(0.9, `rgba(0, 240, 255, ${beam.alpha})`);
        gradient.addColorStop(1, '#ffffff');

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(beam.x, beam.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.thickness;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00f0ff';
        ctx.stroke();
        ctx.restore();

        // Laser head bright spark
        ctx.beginPath();
        ctx.arc(beam.x, beam.y, beam.thickness * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        beam.x += cosA * beam.speed;
        beam.y += sinA * beam.speed;

        // Reset if moved offscreen
        if (beam.y > height + 100 || beam.x > width + 100) {
          if (Math.random() < 0.08) {
            resetBeam(idx);
          }
        }
      });

      // --- F. Draw and Animate Nodes ---
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Screen edge bounds wrap
        if (node.x < -15) node.x = width + 15;
        if (node.x > width + 15) node.x = -15;
        if (node.y < -15) node.y = height + 15;
        if (node.y > height + 15) node.y = -15;

        const currentAlpha = Math.min(1, Math.max(0.2, node.baseAlpha + Math.sin(time + node.pulseOffset) * 0.3));

        // High-prominence Glowing Halos for Hub Nodes
        if (node.isHub) {
          // Layer 1: Outer pulsating neon ring
          const ringRadius = node.radius * (2.8 + Math.sin(time * 2 + node.pulseOffset) * 0.4);
          ctx.beginPath();
          ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `${node.color} ${currentAlpha * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Layer 2: Core glow blur
          ctx.save();
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 1.6, 0, Math.PI * 2);
          ctx.fillStyle = `${node.color} ${currentAlpha * 0.35})`;
          ctx.shadowBlur = 18;
          ctx.shadowColor = node.glowColor;
          ctx.fill();
          ctx.restore();
        }

        // Main Node Core
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color} ${currentAlpha})`;
        ctx.shadowBlur = node.isHub ? 14 : 7;
        ctx.shadowColor = node.glowColor;
        ctx.fill();

        // Bright white center pinpoint for Hubs
        if (node.isHub) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Perspective Flowing Cyber Grid with High Visibility */}
      <div className="absolute inset-0 cyber-grid opacity-60 animate-grid-flow" />

      {/* 2. Vibrant Floating Cyber Ambient Light Orbs (Luminous High Contrast Depth) */}
      <div className="absolute -top-24 -left-16 w-[650px] h-[650px] bg-cyan-500/28 rounded-full blur-[130px] animate-float-slow pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[700px] h-[700px] bg-sky-500/25 rounded-full blur-[140px] animate-float-reverse pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-[600px] h-[600px] bg-teal-500/22 rounded-full blur-[150px] animate-float-slow pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[550px] h-[550px] bg-indigo-500/20 rounded-full blur-[140px] animate-float-reverse pointer-events-none" />

      {/* 3. Subtle Digital Radial Focus Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#080c14]/25 to-[#080c14]/85" />

      {/* 4. Interactive Live Particle Canvas with Maximum Sharpness */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-100" />
    </div>
  );
};
