"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Hero3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Dramatic lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xEE3F2C, 8, 30, Math.PI / 4, 0.5, 1);
    spotLight.position.set(8, 6, 8);
    scene.add(spotLight);

    const spotLight2 = new THREE.SpotLight(0xffffff, 3, 25, Math.PI / 5, 0.5, 1);
    spotLight2.position.set(-6, 4, 5);
    scene.add(spotLight2);

    const rimLight = new THREE.PointLight(0xff2211, 4, 15);
    rimLight.position.set(-4, -3, 2);
    scene.add(rimLight);

    // Floating grid plane (ground feel)
    const gridSize = 40;
    const gridGeo = new THREE.PlaneGeometry(gridSize, gridSize, gridSize, gridSize);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0xEE3F2C,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.rotation.x = -Math.PI / 2;
    gridMesh.position.y = -3;
    scene.add(gridMesh);

    // Central torus knot — dramatic hero piece
    const torusGeo = new THREE.TorusKnotGeometry(1.8, 0.5, 200, 32);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      metalness: 1.0,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      envMapIntensity: 1.5,
      transparent: true,
      opacity: 0.6,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(3, 0, -2);
    scene.add(torusMesh);

    // Secondary accent shapes
    const icoGeo = new THREE.IcosahedronGeometry(0.6, 1);
    const icoMat = new THREE.MeshPhysicalMaterial({
      color: 0xEE3F2C,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-4, 2, -3);
    scene.add(icoMesh);

    const octGeo = new THREE.OctahedronGeometry(0.4);
    const octMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.95,
      roughness: 0.05,
      transparent: true,
      opacity: 0.2,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(5, -1, -1);
    scene.add(octMesh);

    // Particle dust
    const particleCount = 300;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      sizes[i] = Math.random() * 0.03 + 0.01;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.025,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Red accent particles
    const redParticleCount = 60;
    const redGeo = new THREE.BufferGeometry();
    const redPos = new Float32Array(redParticleCount * 3);
    for (let i = 0; i < redParticleCount; i++) {
      redPos[i * 3] = (Math.random() - 0.5) * 20;
      redPos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      redPos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    redGeo.setAttribute("position", new THREE.BufferAttribute(redPos, 3));
    const redMat = new THREE.PointsMaterial({
      color: 0xEE3F2C,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const redParticles = new THREE.Points(redGeo, redMat);
    scene.add(redParticles);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animate
    const clock = new THREE.Clock();
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      torusMesh.rotation.x = t * 0.08;
      torusMesh.rotation.y = t * 0.12;
      torusMesh.position.y = Math.sin(t * 0.4) * 0.3;

      icoMesh.rotation.x = t * 0.3;
      icoMesh.rotation.z = t * 0.2;
      icoMesh.position.y = 2 + Math.sin(t * 0.5) * 0.5;

      octMesh.rotation.y = t * 0.4;
      octMesh.position.y = -1 + Math.cos(t * 0.6) * 0.4;

      particles.rotation.y = t * 0.015;
      redParticles.rotation.y = -t * 0.02;

      // Camera reacts to mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

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
      window.removeEventListener("mousemove", handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />;
}

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      id="hero"
      style={{ height: '100vh', minHeight: '700px' }}
    >
      {/* 3D Background */}
      <Hero3DBackground />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.8) 100%)',
      }} />
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(238,63,44,0.08) 0%, transparent 60%)',
      }} />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-8 lg:px-16">
        {/* Hero text */}
        <div className="flex-1 flex items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: '720px' }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-label-md"
              style={{
                color: '#EE3F2C',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '16px',
              }}
            >
              Premium Automotive Excellence
            </motion.p>

            <h1
              style={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(40px, 6vw, 72px)',
                lineHeight: 1.05,
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '-0.04em',
                marginBottom: '32px',
              }}
            >
              ENGINEERED FOR{' '}
              <span style={{ color: '#EE3F2C', fontStyle: 'italic' }}>
                PRECISION
              </span>
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '18px',
              lineHeight: 1.7,
              maxWidth: '520px',
              marginBottom: '40px',
            }}>
              Curating the world&apos;s finest high-performance vehicles. From acquisition to delivery — an uncompromising experience.
            </p>

            <div className="flex items-center" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="clipped-corner"
                style={{
                  background: '#EE3F2C',
                  color: 'white',
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  padding: '18px 40px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Explore Fleet
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, borderColor: '#EE3F2C' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'transparent',
                  color: 'white',
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  padding: '18px 40px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s',
                }}
              >
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="liquid-glass"
          style={{
            padding: '24px 32px',
            marginBottom: '48px',
            maxWidth: '700px',
            display: 'flex',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {[
            { value: '200+', label: 'Vehicles in Fleet' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '15+', label: 'Global Partners' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 900,
                fontSize: '28px',
                color: '#EE3F2C',
                letterSpacing: '-0.02em',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '10px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.5)',
                marginTop: '4px',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side scroll indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center" style={{ gap: '12px' }}>
        <div style={{ width: '2px', height: '48px', background: 'rgba(255,255,255,0.15)', position: 'relative', overflow: 'hidden' }}>
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: '100%', height: '50%', background: '#EE3F2C', position: 'absolute', top: 0 }}
          />
        </div>
        <span style={{
          writingMode: 'vertical-lr',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.3em',
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
        }}>
          Scroll
        </span>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 w-full z-20" style={{ height: '2px', background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "33%" }}
          transition={{ duration: 2, delay: 1 }}
          style={{ height: '100%', background: '#EE3F2C' }}
        />
      </div>
    </section>
  );
}
