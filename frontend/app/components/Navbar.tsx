"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Inventory", href: "#inventory", active: true },
  { label: "Showroom", href: "#showroom" },
  { label: "Finance", href: "#finance" },
  { label: "Trade-in", href: "#tradein" },
  { label: "Support", href: "#support" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 h-20 flex justify-between items-center px-8"
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        boxShadow: 'inset 0 10px 10px rgba(0,0,0,0.2)',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          fontStyle: 'italic',
          letterSpacing: '0.15em',
          color: 'white',
          fontFamily: "'Rubik', sans-serif",
        }}
      >
        TARGO
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center" style={{ gap: '2rem' }}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "'Rubik', sans-serif",
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              fontSize: '14px',
              color: link.active ? '#EE3F2C' : 'rgba(255,255,255,0.8)',
              borderBottom: link.active ? '2px solid #EE3F2C' : '2px solid transparent',
              paddingBottom: '4px',
              transition: 'color 0.3s, border-color 0.3s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              if (!link.active) {
                e.currentTarget.style.color = '#EE3F2C';
              }
            }}
            onMouseLeave={(e) => {
              if (!link.active) {
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
              }
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA + Search */}
      <div className="flex items-center" style={{ gap: '1rem' }}>
        <button
          className="clipped-corner"
          style={{
            background: '#EE3F2C',
            color: 'white',
            fontFamily: "'Rubik', sans-serif",
            fontWeight: 700,
            fontSize: '12px',
            textTransform: 'uppercase',
            padding: '12px 24px',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            transition: 'background 0.3s, transform 0.15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#ff5540'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#EE3F2C'; }}
        >
          Inquire Now
        </button>
        <span className="material-symbols-outlined" style={{ color: 'white', cursor: 'pointer', fontSize: '24px' }}>
          search
        </span>
      </div>
    </motion.nav>
  );
}
