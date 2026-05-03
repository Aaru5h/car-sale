"use client";
import { motion } from 'framer-motion';

export default function FinanceSection() {
  return (
    <section id="finance" style={{
      padding: '96px 0',
      background: '#1b1b1b',
      position: 'relative',
      zIndex: 10,
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
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
            FINANCE
          </h2>
          <p className="text-label-md" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            TAILORED OWNERSHIP SOLUTIONS
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {[
            {
              icon: 'payments',
              title: 'Leasing Options',
              desc: 'Flexible terms designed around your lifestyle, allowing you to experience the latest engineering marvels with ease. Custom monthly plans from $2,499/mo.',
              cta: 'View Terms',
              highlight: '$2,499',
              highlightLabel: '/mo starting',
            },
            {
              icon: 'swap_horiz',
              title: 'Trade-In Valuation',
              desc: 'Seamlessly transition to your next high-performance vehicle with our competitive trade-in program. Instant market-rate assessments.',
              cta: 'Get Estimate',
              highlight: '48hr',
              highlightLabel: 'Valuation turnaround',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={i === 0 ? 'liquid-glass diagonal-cut' : 'liquid-glass diagonal-cut-reverse'}
              style={{
                padding: '40px',
                transition: 'border-color 0.3s',
              }}
            >
              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(238,63,44,0.1)',
                border: '1px solid rgba(238,63,44,0.2)',
                marginBottom: '24px',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#EE3F2C' }}>
                  {card.icon}
                </span>
              </div>

              <h3 className="text-headline-md" style={{
                color: 'white',
                textTransform: 'uppercase',
                marginBottom: '16px',
                fontSize: '22px',
              }}>
                {card.title}
              </h3>

              {/* Highlight stat */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '6px',
                marginBottom: '16px',
              }}>
                <span style={{
                  color: '#EE3F2C',
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: 900,
                  fontSize: '32px',
                  letterSpacing: '-0.02em',
                }}>
                  {card.highlight}
                </span>
                <span style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {card.highlightLabel}
                </span>
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '16px',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                {card.desc}
              </p>

              <button style={{
                background: 'transparent',
                border: 'none',
                color: '#EE3F2C',
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: 0,
                transition: 'gap 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.gap = '14px'; }}
              onMouseLeave={(e) => { e.currentTarget.style.gap = '8px'; }}
              >
                {card.cta}
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
