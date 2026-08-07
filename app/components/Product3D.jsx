"use client";

import { useEffect, useRef } from 'react';

export default function Product3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scene, camera, renderer, controls, group;
    let animationId;

    const init = async () => {
      try {
        const THREE = await import('three');
        const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');

        const width = container.clientWidth || 600;
        const height = container.clientHeight || 500;

        // Scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0b);

        // Camera
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0.5, 4.5);

        // Renderer
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        renderer.setClearColor(0x0a0a0b, 1);
        container.appendChild(renderer.domElement);

        // === LIGHTS ===
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffffff, 1.2, 10, 0.3, 0.5);
        spotLight.position.set(5, 5, 5);
        scene.add(spotLight);

        const spotLight2 = new THREE.SpotLight(0xc6a15b, 0.8, 10, 0.3, 0.5);
        spotLight2.position.set(-5, 3, 5);
        scene.add(spotLight2);

        const pointLight = new THREE.PointLight(0xc6a15b, 0.5, 5);
        pointLight.position.set(0, 0, 2);
        scene.add(pointLight);

        // === GROUP ===
        group = new THREE.Group();
        scene.add(group);

        // === MATERIALS ===
        const goldMat = new THREE.MeshPhysicalMaterial({
          color: 0xc6a15b,
          metalness: 0.9,
          roughness: 0.2,
        });

        const lensMat = new THREE.MeshPhysicalMaterial({
          color: 0xc6a15b,
          metalness: 0.3,
          roughness: 0.2,
          transparent: true,
          opacity: 0.5,
          envMapIntensity: 1,
        });

        const armMat = new THREE.MeshPhysicalMaterial({
          color: 0x2a2a2a,
          metalness: 0.6,
          roughness: 0.4,
        });

        const accentMat = new THREE.MeshPhysicalMaterial({
          color: 0xc6a15b,
          metalness: 0.8,
          roughness: 0.2,
        });

        const padMat = new THREE.MeshPhysicalMaterial({
          color: 0xc6a15b,
          metalness: 0.7,
          roughness: 0.3,
        });

        // === GLASSES MODEL ===

        // Left lens
        const leftLens = new THREE.Mesh(new THREE.SphereGeometry(0.85, 32, 32), lensMat);
        leftLens.position.set(-1.2, 0, 0);
        leftLens.scale.set(1, 0.9, 0.6);
        group.add(leftLens);

        // Right lens
        const rightLens = new THREE.Mesh(new THREE.SphereGeometry(0.85, 32, 32), lensMat);
        rightLens.position.set(1.2, 0, 0);
        rightLens.scale.set(1, 0.9, 0.6);
        group.add(rightLens);

        // Left frame ring
        const ringGeo = new THREE.TorusGeometry(0.75, 0.06, 16, 32);
        const leftRing = new THREE.Mesh(ringGeo, goldMat);
        leftRing.position.set(-1.2, 0, 0);
        leftRing.rotation.x = Math.PI / 2;
        leftRing.scale.set(1, 0.9, 0.6);
        group.add(leftRing);

        // Right frame ring
        const rightRing = new THREE.Mesh(ringGeo, goldMat);
        rightRing.position.set(1.2, 0, 0);
        rightRing.rotation.x = Math.PI / 2;
        rightRing.scale.set(1, 0.9, 0.6);
        group.add(rightRing);

        // Bridge
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.08, 0.15), goldMat);
        bridge.position.set(0, 0.1, 0.15);
        group.add(bridge);

        // Bridge detail
        const bridgeDetail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.08), goldMat);
        bridgeDetail.position.set(0, 0.18, 0.15);
        group.add(bridgeDetail);

        // Left temple arm
        const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.06), armMat);
        leftArm.position.set(-1.9, 0.1, 0.9);
        leftArm.rotation.z = -0.1;
        leftArm.rotation.y = -0.3;
        group.add(leftArm);

        // Right temple arm
        const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.06), armMat);
        rightArm.position.set(1.9, 0.1, 0.9);
        rightArm.rotation.z = 0.1;
        rightArm.rotation.y = 0.3;
        group.add(rightArm);

        // Gold accent on left arm
        const accent1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.04), accentMat);
        accent1.position.set(-1.4, 0.1, 0.9);
        group.add(accent1);

        // Gold accent on right arm
        const accent2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.04), accentMat);
        accent2.position.set(1.4, 0.1, 0.9);
        group.add(accent2);

        // Left nose pad
        const pad1 = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), padMat);
        pad1.position.set(-0.25, -0.35, 0.3);
        group.add(pad1);

        // Right nose pad
        const pad2 = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), padMat);
        pad2.position.set(0.25, -0.35, 0.3);
        group.add(pad2);

        // === ORBIT CONTROLS ===
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.rotateSpeed = 0.8;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.5;
        controls.minPolarAngle = 0.2;
        controls.maxPolarAngle = 0.8;
        controls.target.set(0, 0, 0);
        controls.update();

        // === ANIMATION ===
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();

        // === RESIZE ===
        const handleResize = () => {
          if (!container) return;
          const newWidth = container.clientWidth || 600;
          const newHeight = container.clientHeight || 500;
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
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
        console.error('Product3D error:', error);
        if (container) {
          container.innerHTML = '<div style="color:#c6a15b;text-align:center;padding:40px;">3D Product Viewer<br><span style="font-size:14px;color:#666;">Loading failed</span></div>';
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
      className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden bg-black/80 border border-gold/20"
      style={{ minHeight: '350px' }}
    />
  );
}