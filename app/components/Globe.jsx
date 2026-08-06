"use client";

import { useEffect, useRef } from 'react';

export default function Globe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadThree = async () => {
      try {
        const THREE = await import('three');
        const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.set(0, 0, 5);
        
        const renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true 
        });
        renderer.setSize(600, 600);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
          containerRef.current.appendChild(renderer.domElement);
        }
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0xD4AF37, 1.5, 10);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);
        
        const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
        pointLight2.position.set(-10, -10, -10);
        scene.add(pointLight2);
        
        const geometry = new THREE.SphereGeometry(1.8, 48, 48);
        const material = new THREE.MeshStandardMaterial({
          color: 0xD4AF37,
          wireframe: true,
          emissive: 0xD4AF37,
          emissiveIntensity: 0.2,
          transparent: true,
          opacity: 0.6,
        });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);
        
        const particlesGeometry = new THREE.BufferGeometry();
        const count = 800;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
          const radius = 2.5;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          positions[i] = Math.sin(phi) * Math.cos(theta) * radius;
          positions[++i] = Math.sin(phi) * Math.sin(theta) * radius;
          positions[++i] = Math.cos(phi) * radius;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({
          color: 0xD4AF37,
          size: 0.03,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
        });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.rotateSpeed = 0.5;
        controls.autoRotate = false;
        
        let animationId;
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          globe.rotation.y += 0.0015;
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
        
        return () => {
          cancelAnimationFrame(animationId);
          renderer.dispose();
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
          }
        };
      } catch (error) {
        console.error('Error loading 3D:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = '<div class="text-gold text-center">3D Globe Load Failed</div>';
        }
      }
    };
    
    const cleanup = loadThree();
    return () => {
      cleanup.then((cleanupFn) => {
        if (cleanupFn) cleanupFn();
      });
    };
  }, []); // <-- Empty dependency array, no setState calls

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[600px] md:h-[700px] flex items-center justify-center"
    />
  );
}