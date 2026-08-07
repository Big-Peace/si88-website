"use client";

import { useEffect, useRef } from 'react';

export default function Globe() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const groupRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const init = async () => {
      try {
        const THREE = await import('three');
        const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');

        const width = container.clientWidth || 400;
        const height = Math.min(width, 600);

        // Scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.set(0, 0.3, 6.2);
        cameraRef.current = camera;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        renderer.setSize(width, height);
        rendererRef.current = renderer;

        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        // Group
        const group = new THREE.Group();
        groupRef.current = group;
        scene.add(group);

        // === Wireframe Sphere ===
        const sphereGeo = new THREE.IcosahedronGeometry(2, 3);
        const sphereMat = new THREE.MeshBasicMaterial({
          color: 0x3a3220,
          wireframe: true,
          transparent: true,
          opacity: 0.35,
        });
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        group.add(sphere);

        // === Inner Solid Sphere ===
        const innerMat = new THREE.MeshBasicMaterial({
          color: 0x0a0a0b,
          transparent: true,
          opacity: 0.85,
        });
        const inner = new THREE.Mesh(new THREE.SphereGeometry(1.97, 32, 32), innerMat);
        group.add(inner);

        // === Trade Hub Network ===
        function latLonToXYZ(lat, lon, r) {
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lon + 180) * (Math.PI / 180);
          return new THREE.Vector3(
            -r * Math.sin(phi) * Math.cos(theta),
            r * Math.cos(phi),
            r * Math.sin(phi) * Math.sin(theta)
          );
        }

        const nodes = [
          { name: 'HQ', lat: 6.2, lon: 7.1, hub: true },
          { name: 'Manila', lat: 14.6, lon: 121.0 },
          { name: 'Shanghai', lat: 31.2, lon: 121.5 },
          { name: 'Dubai', lat: 25.2, lon: 55.3 },
          { name: 'London', lat: 51.5, lon: 0.1 },
          { name: 'Cape Town', lat: -33.9, lon: 18.4 },
          { name: 'New York', lat: 40.7, lon: -74.0 },
        ];

        const R = 2.02;
        const positions = nodes.map((n) => ({ ...n, pos: latLonToXYZ(n.lat, n.lon, R) }));
        const hub = positions.find((n) => n.hub);

        // Dots
        const dotGeo = new THREE.SphereGeometry(0.028, 12, 12);
        positions.forEach((n) => {
          const mat = new THREE.MeshBasicMaterial({
            color: n.hub ? 0xe6d3a3 : 0xc6a15b,
          });
          const dot = new THREE.Mesh(dotGeo, mat);
          dot.position.copy(n.pos);
          group.add(dot);
        });

        // Arcs from HQ to each other node
        function makeArc(a, b) {
          const mid = a.clone().add(b).multiplyScalar(0.5);
          mid.setLength(R * 1.35);
          const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
          const pts = curve.getPoints(40);
          const geo = new THREE.BufferGeometry().setFromPoints(pts);
          const mat = new THREE.LineBasicMaterial({
            color: 0xc6a15b,
            transparent: true,
            opacity: 0.45,
          });
          return new THREE.Line(geo, mat);
        }

        positions.forEach((n) => {
          if (!n.hub) group.add(makeArc(hub.pos, n.pos));
        });

        group.rotation.x = 0.15;
        group.rotation.y = -0.6;

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.rotateSpeed = 0.5;
        controls.autoRotate = false;

        // Animation
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);
          if (groupRef.current) {
            groupRef.current.rotation.y += 0.0016;
          }
          controls.update();
          renderer.render(scene, camera);
        };
        animate();

        // Resize
        const handleResize = () => {
          if (!container) return;
          const newWidth = container.clientWidth || 400;
          const newHeight = Math.min(newWidth, 600);
          camera.aspect = 1;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        // Mark as ready
        container.classList.add('ready');

        // Cleanup
        return () => {
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
          }
          window.removeEventListener('resize', handleResize);
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
      className="w-full aspect-square max-w-[450px] md:max-w-[550px] mx-auto opacity-0 transition-opacity duration-1600 ease-[cubic-bezier(.22,.68,0,1)] delay-1000 [&.ready]:opacity-100"
    />
  );
}