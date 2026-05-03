"use client";
import { motion } from 'framer-motion';

export default function TradeInSection() {
  return (
    <section id="tradein" style={{
      padding: '96px 0',
      background: '#000000',
      position: 'relative',
      zIndex: 10,
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
            TRADE-IN
          </h2>
          <p className="text-label-md" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            MAXIMIZE YOUR VEHICLE'S VALUE
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="liquid-glass clipped-tl-br"
            style={{ padding: '48px' }}
          >
            <h3 className="text-headline-md" style={{ color: 'white', marginBottom: '8px', textTransform: 'uppercase' }}>
              Instant Valuation
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '32px', fontSize: '16px', lineHeight: 1.6 }}>
              Enter your vehicle details to receive a preliminary market estimate within seconds.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Make</label>
                  <input type="text" placeholder="e.g. Porsche" style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontFamily: "'Rubik', sans-serif" }} />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Model</label>
                  <input type="text" placeholder="e.g. 911 GT3" style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontFamily: "'Rubik', sans-serif" }} />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Year</label>
                  <input type="text" placeholder="YYYY" style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontFamily: "'Rubik', sans-serif" }} />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Mileage</label>
                  <input type="text" placeholder="000,000" style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontFamily: "'Rubik', sans-serif" }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>VIN (Optional for precise quote)</label>
                <input type="text" placeholder="17-character VIN" style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontFamily: "'Rubik', sans-serif" }} />
              </div>

              <button className="clipped-corner" style={{
                background: '#EE3F2C',
                color: 'white',
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'uppercase',
                padding: '20px 32px',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'background 0.3s',
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ff5540'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#EE3F2C'; }}
              >
                Calculate Value
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calculate</span>
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <span className="material-symbols-outlined" style={{ color: '#EE3F2C', fontSize: '32px' }}>verified</span>
                <h4 className="text-headline-md" style={{ color: 'white', textTransform: 'uppercase' }}>Fair Market Value</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 1.6 }}>
                Our algorithms cross-reference real-time auction data and retail market trends to ensure you receive the most competitive offer for your high-end vehicle.
              </p>
            </div>

            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <span className="material-symbols-outlined" style={{ color: '#EE3F2C', fontSize: '32px' }}>sync_alt</span>
                <h4 className="text-headline-md" style={{ color: 'white', textTransform: 'uppercase' }}>Seamless Upgrade</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 1.6 }}>
                Apply your trade-in equity directly towards your next purchase. We handle all DMV paperwork and payoff coordination securely and efficiently.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <span className="material-symbols-outlined" style={{ color: '#EE3F2C', fontSize: '32px' }}>directions_car</span>
                <h4 className="text-headline-md" style={{ color: 'white', textTransform: 'uppercase' }}>White-Glove Pickup</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 1.6 }}>
                Once accepted, our specialized transport team will collect your vehicle directly from your home or office, ensuring a flawless handover.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
