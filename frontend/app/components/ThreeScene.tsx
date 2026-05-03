"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xEE3F2C, 2, 20);
    pointLight1.position.set(5, 3, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.8, 20);
    pointLight2.position.set(-5, -2, 3);
    scene.add(pointLight2);

    // Subtle floating geometric shapes (Stitch-style industrial aesthetic)
    const shapes: THREE.Mesh[] = [];
    const shapeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xEE3F2C,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.15,
    });

    // A few large, slow-moving shapes
    const geometries = [
      new THREE.OctahedronGeometry(0.8),
      new THREE.TetrahedronGeometry(0.6),
      new THREE.IcosahedronGeometry(0.5),
    ];

    const positions = [
      { x: 3, y: 1.5, z: -2 },
      { x: -3.5, y: -1, z: -3 },
      { x: 1, y: -2, z: -1.5 },
    ];

    geometries.forEach((geo, i) => {
      const mesh = new THREE.Mesh(geo, shapeMaterial);
      mesh.position.set(positions[i].x, positions[i].y, positions[i].z);
      scene.add(mesh);
      shapes.push(mesh);
    });

    // Subtle particle field
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.4,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      shapes.forEach((shape, i) => {
        shape.rotation.x = t * 0.15 * (i + 1) * 0.3;
        shape.rotation.y = t * 0.1 * (i + 1) * 0.3;
        shape.position.y = positions[i].y + Math.sin(t * 0.3 + i) * 0.3;
      });

      particles.rotation.y = t * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
