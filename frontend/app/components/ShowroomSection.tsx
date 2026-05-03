"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ShowroomScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 1, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const spot1 = new THREE.SpotLight(0xEE3F2C, 5, 20, Math.PI / 6, 0.6, 1);
    spot1.position.set(4, 4, 4);
    scene.add(spot1);
    const spot2 = new THREE.SpotLight(0xffffff, 3, 20, Math.PI / 5, 0.5, 1);
    spot2.position.set(-3, 2, 3);
    scene.add(spot2);

    // A rotating wireframe sphere
    const sphereGeo = new THREE.IcosahedronGeometry(2, 2);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xEE3F2C,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      metalness: 0.8,
      roughness: 0.2,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Inner solid sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 3);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      metalness: 1.0,
      roughness: 0.1,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.4,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Ring
    const ringGeo = new THREE.TorusGeometry(2.8, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xEE3F2C, transparent: true, opacity: 0.3 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    const clock = new THREE.Clock();
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      sphere.rotation.x = t * 0.1;
      sphere.rotation.y = t * 0.15;
      innerSphere.rotation.y = -t * 0.2;
      ring.rotation.z = t * 0.05;
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
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />;
}

export default function ShowroomSection() {
  return (
    <section id="showroom" style={{ padding: '96px 0', background: '#0e0e0e', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', padding: '48px 0', marginBottom: '48px' }}
        >
          <div style={{ position: 'absolute', left: '-16px', top: 0, width: '3px', height: '96px', background: '#EE3F2C' }} />
          <h2 className="text-headline-xl" style={{ color: 'white', textTransform: 'uppercase', marginBottom: '8px' }}>
            SHOWROOM
          </h2>
          <p className="text-label-md" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            EXPERIENCE PRECISION
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="liquid-glass clipped-card"
          style={{ padding: '48px', overflow: 'hidden' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h3 className="text-headline-lg" style={{ color: 'white', textTransform: 'uppercase', marginBottom: '24px' }}>
                Unrivaled Performance
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.7, marginBottom: '32px' }}>
                Step into our virtual showroom and explore our curated collection of high-performance vehicles.
                Every detail, from the aerodynamic curves to the roar of the engine, is meticulously presented.
              </p>

              {/* Performance stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                {[
                  { icon: 'speed', value: '986 HP', label: 'Peak Power' },
                  { icon: 'timer', value: '2.5s', label: '0-60 MPH' },
                  { icon: 'route', value: '211 MPH', label: 'Top Speed' },
                  { icon: 'bolt', value: 'Hybrid', label: 'Powertrain' },
                ].map((stat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(238,63,44,0.1)',
                      border: '1px solid rgba(238,63,44,0.2)',
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#EE3F2C' }}>
                        {stat.icon}
                      </span>
                    </div>
                    <div>
                      <div style={{ color: 'white', fontWeight: 700, fontSize: '16px', fontFamily: "'Rubik', sans-serif" }}>{stat.value}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="clipped-corner"
                style={{
                  background: '#EE3F2C',
                  color: 'white',
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  padding: '16px 32px',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#ff5540'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#EE3F2C'; }}
              >
                Explore Now
              </button>
            </div>

            {/* 3D Scene */}
            <div style={{
              position: 'relative',
              height: '400px',
              background: 'rgba(0,0,0,0.4)',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <ShowroomScene />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
