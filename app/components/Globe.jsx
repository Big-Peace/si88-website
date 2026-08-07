"use client";

import { useEffect, useRef } from 'react';

export default function Globe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scene, camera, renderer, globe, particles, controls;
    let animationId;

    const init = async () => {
      try {
        const THREE = await import('three');
        const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');

        const width = container.clientWidth || 500;
        const height = Math.min(width, 600);

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.set(0, 0.3, 6.2);

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Group
        const group = new THREE.Group();
        scene.add(group);

        // Main sphere - GOLD WIREFRAME (visible!)
        const sphereGeo = new THREE.IcosahedronGeometry(2, 3);
        const sphereMat = new THREE.MeshBasicMaterial({
          color: 0xc6a15b,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        });
        globe = new THREE.Mesh(sphereGeo, sphereMat);
        group.add(globe);

        // Inner glow sphere
        const innerMat = new THREE.MeshBasicMaterial({
          color: 0xc6a15b,
          transparent: true,
          opacity: 0.08,
        });
        const inner = new THREE.Mesh(new THREE.SphereGeometry(1.97, 32, 32), innerMat);
        group.add(inner);

        // Gold dots on sphere surface
        const dotGeo = new THREE.SphereGeometry(0.035, 8, 8);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0xc6a15b });

        // Random dots on sphere
        for (let i = 0; i < 200; i++) {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          const r = 2.02;
          const dot = new THREE.Mesh(dotGeo, dotMat);
          dot.position.set(
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.sin(phi) * Math.sin(theta),
            r * Math.cos(phi)
          );
          group.add(dot);
        }

        // Controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.rotateSpeed = 0.8;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.0;

        // Animation
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          controls.update();
          if (renderer && scene && camera) renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
          if (!container) return;
          const newWidth = container.clientWidth || 500;
          const newHeight = Math.min(newWidth, 600);
          if (camera) {
            camera.aspect = 1;
            camera.updateProjectionMatrix();
          }
          if (renderer) renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);
        container.classList.add('ready');

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
        console.error('Globe error:', error);
        if (container) {
          container.innerHTML = '<div style="color:#c6a15b;text-align:center;padding:20px;">3D Globe<br><span style="font-size:14px;color:#666;">Loading...</span></div>';
        }
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
      className="w-full aspect-square max-w-[450px] md:max-w-[550px] mx-auto opacity-0 transition-opacity duration-1000 [&.ready]:opacity-100"
      style={{ minHeight: '300px', minWidth: '300px' }}
    />
  );
}