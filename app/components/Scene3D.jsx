"use client";

import { useEffect, useRef } from 'react';

export default function Scene3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scene, camera, renderer, particles;
    let animationId;

    const init = async () => {
      try {
        const THREE = await import('three');

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Create visible particles
        const count = 2000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        for (let i = 0; i < count * 3; i++) {
          positions[i] = (Math.random() - 0.5) * 30;
          colors[i] = Math.random() * 0.5 + 0.5;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
          color: 0xc6a15b,
          size: 0.08,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const animate = () => {
          animationId = requestAnimationFrame(animate);
          if (particles) {
            particles.rotation.x += 0.0005;
            particles.rotation.y += 0.001;
          }
          if (renderer && scene && camera) {
            renderer.render(scene, camera);
          }
        };
        animate();

        const handleResize = () => {
          if (!renderer || !camera) return;
          const width = window.innerWidth;
          const height = window.innerHeight;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          if (animationId) cancelAnimationFrame(animationId);
          if (renderer) {
            renderer.dispose();
            if (container && renderer.domElement) {
              container.removeChild(renderer.domElement);
            }
          }
        };
      } catch (error) {
        console.error('Three.js loading error:', error);
      }
    };

    const cleanupPromise = init();
    return () => {
      cleanupPromise.then((cleanupFn) => {
        if (cleanupFn) cleanupFn();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
}