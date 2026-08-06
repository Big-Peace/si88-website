"use client";

import { useEffect, useRef } from 'react';

export default function Globe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadThree = async () => {
      try {
        const THREE = await import('three');
        const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
        
        // Get container size
        const container = containerRef.current;
        if (!container) return;
        
        const width = container.clientWidth || 400;
        const height = Math.min(width, 600);
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.set(0, 0, 5);
        
        const renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true 
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        container.innerHTML = '';
        container.appendChild(renderer.domElement);
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0xD4AF37, 1.5, 10);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);
        
        const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
        pointLight2.position.set(-10, -10, -10);
        scene.add(pointLight2);
        
        // Responsive sphere size
        const sphereRadius = Math.min(width / 5, 1.8);
        
        const geometry = new THREE.SphereGeometry(sphereRadius, 48, 48);
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
        
        // Responsive particles
        const particlesGeometry = new THREE.BufferGeometry();
        const count = Math.min(800, Math.floor(width * 2));
        const positions = new Float32Array(count * 3);
        const particleRadius = sphereRadius * 1.4;
        for (let i = 0; i < count * 3; i++) {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          positions[i] = Math.sin(phi) * Math.cos(theta) * particleRadius;
          positions[++i] = Math.sin(phi) * Math.sin(theta) * particleRadius;
          positions[++i] = Math.cos(phi) * particleRadius;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({
          color: 0xD4AF37,
          size: Math.max(0.02, sphereRadius * 0.015),
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
        
        const handleResize = () => {
          if (!container) return;
          const newWidth = container.clientWidth || 400;
          const newHeight = Math.min(newWidth, 600);
          camera.aspect = 1;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
          cancelAnimationFrame(animationId);
          renderer.dispose();
          if (container) {
            container.innerHTML = '';
          }
        };
      } catch (error) {
        console.error('Error loading 3D:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = '<div class="text-gold text-center p-4">3D Globe Load Failed</div>';
        }
      }
    };
    
    const cleanup = loadThree();
    return () => {
      cleanup.then((cleanupFn) => {
        if (cleanupFn) cleanupFn();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full aspect-square max-w-[400px] md:max-w-[500px] lg:max-w-full mx-auto"
    />
  );
}