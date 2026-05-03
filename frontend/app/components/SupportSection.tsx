"use client";
import { motion } from 'framer-motion';

export default function SupportSection() {
  return (
    <section id="support" className="bg-geometric" style={{
      position: 'relative',
      paddingTop: '80px',
      paddingBottom: '128px',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      {/* Decorative skewed line */}
      <div style={{
        position: 'absolute',
        top: '80px',
        right: '-10%',
        width: '50%',
        height: '500px',
        borderLeft: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        transform: 'skewX(-20deg)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-label-md"
            style={{ color: '#EE3F2C', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}
          >
            Engineered Support
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-headline-xl"
            style={{ color: 'white', textTransform: 'uppercase', maxWidth: '500px' }}
          >
            AT YOUR <br />
            <span style={{ color: '#EE3F2C', fontStyle: 'italic' }}>SERVICE</span>
          </motion.h2>
        </div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '48px' }}>
          {/* Left: Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="liquid-glass diagonal-cut"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                <div style={{
                  padding: '12px',
                  background: 'rgba(238,63,44,0.1)',
                  border: '1px solid rgba(238,63,44,0.2)',
                  flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#EE3F2C', fontSize: '24px' }}>location_on</span>
                </div>
                <div>
                  <h3 className="text-headline-md" style={{ color: 'white', textTransform: 'uppercase', fontSize: '20px', marginBottom: '8px' }}>
                    Global Headquarters
                  </h3>
                  <p style={{ color: '#c8c6c5', fontSize: '16px', lineHeight: 1.6 }}>
                    4822 Innovation Way<br />
                    Tech District, TX 75201<br />
                    United States
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="liquid-glass diagonal-cut"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                <div style={{
                  padding: '12px',
                  background: 'rgba(238,63,44,0.1)',
                  border: '1px solid rgba(238,63,44,0.2)',
                  flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#EE3F2C', fontSize: '24px' }}>phone</span>
                </div>
                <div>
                  <h3 className="text-headline-md" style={{ color: 'white', textTransform: 'uppercase', fontSize: '20px', marginBottom: '8px' }}>
                    Direct Line
                  </h3>
                  <p style={{ color: '#c8c6c5', fontSize: '18px', fontWeight: 700, letterSpacing: '0.1em' }}>
                    +1 (888) 555-TARGO
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>
                    24/7 Priority Support for Members
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="liquid-glass diagonal-cut"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                <div style={{
                  padding: '12px',
                  background: 'rgba(238,63,44,0.1)',
                  border: '1px solid rgba(238,63,44,0.2)',
                  flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#EE3F2C', fontSize: '24px' }}>schedule</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="text-headline-md" style={{ color: 'white', textTransform: 'uppercase', fontSize: '20px', marginBottom: '16px' }}>
                    Operating Hours
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { name: 'Showroom', time: '09:00 - 20:00', highlight: false },
                      { name: 'Technical Service', time: '07:00 - 22:00', highlight: false },
                      { name: 'Concierge', time: '24 Hours', highlight: true },
                    ].map((h, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        paddingBottom: i < 2 ? '8px' : 0,
                      }}>
                        <span style={{ color: 'white', fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {h.name}
                        </span>
                        <span style={{
                          fontSize: '12px',
                          fontWeight: h.highlight ? 700 : 500,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: h.highlight ? '#EE3F2C' : '#c8c6c5',
                        }}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="diagonal-cut-reverse" style={{
              background: '#2a2a2a',
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Watermark icon */}
              <div style={{ position: 'absolute', top: '16px', right: '16px', opacity: 0.04, pointerEvents: 'none' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '120px', color: 'white' }}>settings_suggest</span>
              </div>

              <h2 className="text-headline-lg" style={{ color: 'white', textTransform: 'uppercase', marginBottom: '32px' }}>
                Technical Request
              </h2>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  {[
                    { label: 'Full Name', placeholder: 'ENTER NAME', type: 'text' },
                    { label: 'Email Identity', placeholder: 'USER@PROVIDER.COM', type: 'email' },
                  ].map((field, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 500,
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        style={{
                          width: '100%',
                          background: 'black',
                          border: 'none',
                          borderBottom: '1px solid rgba(255,255,255,0.2)',
                          color: 'white',
                          padding: '12px 0',
                          outline: 'none',
                          fontFamily: "'Rubik', sans-serif",
                          fontSize: '14px',
                          transition: 'border-color 0.3s',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderBottomColor = '#EE3F2C'; }}
                        onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.2)'; }}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500,
                  }}>
                    Category
                  </label>
                  <select style={{
                    width: '100%',
                    background: 'black',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    padding: '12px 0',
                    outline: 'none',
                    fontFamily: "'Rubik', sans-serif",
                    fontSize: '14px',
                    cursor: 'pointer',
                    appearance: 'none' as const,
                  }}>
                    <option style={{ background: '#131313' }}>VEHICLE MAINTENANCE</option>
                    <option style={{ background: '#131313' }}>FINANCE &amp; LEASING</option>
                    <option style={{ background: '#131313' }}>GLOBAL LOGISTICS</option>
                    <option style={{ background: '#131313' }}>GENERAL INQUIRY</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500,
                  }}>
                    Manifest Details
                  </label>
                  <textarea
                    placeholder="DESCRIBE YOUR REQUIREMENTS..."
                    rows={4}
                    style={{
                      width: '100%',
                      background: 'black',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.2)',
                      color: 'white',
                      padding: '12px 0',
                      outline: 'none',
                      fontFamily: "'Rubik', sans-serif",
                      fontSize: '14px',
                      resize: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderBottomColor = '#EE3F2C'; }}
                    onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.2)'; }}
                  />
                </div>

                <button
                  type="button"
                  className="diagonal-cut"
                  style={{
                    width: '100%',
                    background: '#EE3F2C',
                    color: 'white',
                    fontFamily: "'Rubik', sans-serif",
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    padding: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    marginTop: '8px',
                    transition: 'filter 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)'; }}
                >
                  Transmit Request
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>send</span>
                </button>
              </form>
            </div>

            {/* Image cards below form */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '32px' }}>
              {[
                { label: 'Global Operations', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkLP6vHmBvgdwDwDPzBvTAkA4Yqxr1gZ1bQUu6UqiTNgMCMrC436jsceHJYelqsfnk5SonZb04eQGfICDx84cTeW6s8p2FiQQ64bQP8L6QigNMixxHrG6NCkm1U4NW1usf9iqKi3c_g7X7bzrocsY5rg4t4MUVq_lVSkwfCcjgLzPcEzTL_GLTM70B8JMHJO1geprTJcVjPIBc5uhm-57dOOfjNkdj6246nEu9FO1VRmJ5gZooINdvBDl4Ysk1lU72cMf3AZOR7cE' },
                { label: 'Fleet Hubs', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxTxOnLTXpRz5mdsljn-oRxqllMF7CxjDykVmgXEywjACAui0pxrot8yGVTLUxic72J9UH8W1F9HJwd2zQEezo5WTWzI8hw3EEEa7bL_ByvSkW6OzKtI_dEAEUHX2xLpkWAyulWdtT11lIC_6biduwu1orm8DKmTXlzvKdBB6XyBbQgw-49hagjoMYpomIEZmlz0lRlpkp9HmyQcHUgJ_CBGp9kB0OajhK7vK7ugle4djL0C_WlQOhyzrOHr66LMaiPTiUzr05TkI' },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="diagonal-cut"
                  style={{ position: 'relative', height: '192px', overflow: 'hidden', cursor: 'pointer' }}
                >
                  <img
                    alt={img.label}
                    src={img.src}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '24px',
                  }}>
                    <span style={{
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                    }}>
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
