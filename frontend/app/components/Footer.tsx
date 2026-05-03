"use client";

export default function Footer() {
  return (
    <footer style={{
      background: 'black',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '48px 0',
      width: '100%',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        <div style={{
          fontSize: '18px',
          fontWeight: 900,
          color: 'white',
          textTransform: 'uppercase',
          fontFamily: "'Rubik', sans-serif",
        }}>
          TARGO
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
          {['Privacy Policy', 'Terms of Service', 'Fleet Sales', 'Careers', 'Global Locations'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "'Rubik', sans-serif",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#EE3F2C'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{
          fontFamily: "'Rubik', sans-serif",
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.4)',
        }}>
          © 2024 TARGO AUTOMOTIVE. ENGINEERED PRECISION.
        </div>
      </div>
    </footer>
  );
}
