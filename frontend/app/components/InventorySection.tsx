"use client";
import { motion } from 'framer-motion';

const vehicles = [
    {
        name: "FERRARI SF90",
        subtitle: "Stradale Hybrid",
        price: "$625,000",
        hp: "986",
        zeroToSixty: "2.5",
        mileage: "1,204",
        badge: "NEW ARRIVAL",
        badgeStyle: "red",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABF1sURVn_x4zV3Wsc5XmqHEWhWJ0R40LlOy4_8uJ2LpzJk9KrH_yB9NPX2k40o8EIacgYny6tVBJdZeYlP4a-3sCs787U8Eyc_hnss134T1RTyG_QL6qObNon5gG0WqQ5A_vQD7wQmE8DxNoxeTtGQEULaHUgSFDCQ7SZky0gSQ0Ts7HMGSirU9wPiMObWw9IW7aon3nBWo3D5IR9kxo29XUouSJl-uvooVLcta2cSe2xaYVC1DSHr3eW79NyiV4KGOv0z3P2X8E"
    },
    {
        name: "LAMBORGHINI SVJ",
        subtitle: "Aventador V12",
        price: "$845,900",
        hp: "770",
        zeroToSixty: "2.8",
        mileage: "428",
        badge: "RESERVED",
        badgeStyle: "glass",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuEFeKT7Couy21mtNQcLvs4Aenv-W1xbuCrkUupaEHj6wle8fJMf3nDCpA-yGGVgiiF6BhOgfQgKqIeCWWYvRuvYRd_z9BO0zSxBvpPcD_8TcqyXCxVQF1aFH9B4cyxScmeUgTWxmgy0nTqARFgD5OfGWTs7PbDAiwtgX30_WKzz6e_SWBmXyXMpgL_0f3UVyY0l41g5kocQ51KR8DDE0tZRNt88jPmTWTVodQYlieT_K0U3Z8gZBsvPGn7MWYxuzMvEHyAigxwK8"
    },
    {
        name: "PORSCHE GT3 RS",
        subtitle: "992 Generation",
        price: "$389,000",
        hp: "518",
        zeroToSixty: "3.0",
        mileage: "12",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJEVtle8geS5KY1zeIeqT_jhwNy4HtyR-xPEVRxwqkK5jUs2W9RzbQs5D-wo4EmWRdOwD0A-QuRFeeEFfMSq1GZOMfc_TKVCMLB_hhvfqcAymHDsPVfIjDoE3KD76IwhRezWDdmKZxIlhetGC-EPx9KOydZnItbkRUsU1dRftZg_fka5Ji24XNY9H0B2ycKJGiQd-CTnrurPZMaJo6CeDffdI2YbuNDXSpJq9hV5dBgpEthPjykSL5lXGCHz-WClBpswbgfFDVs4Q"
    },
    {
        name: "MCLAREN 720S",
        subtitle: "Performance Edition",
        price: "$298,500",
        hp: "710",
        zeroToSixty: "2.9",
        mileage: "4,800",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbBEJVikkRSMAV1YQNASVUe1llYRxR7aKtsFLzPu4jH4uAUlyJ_h3K94HZZsiUHoKFWQSMz-E8njMVSzXS5lzG88YmAE4iXoufecrNO2RknceQ8aFgVDzea0F0kNw096FAtDc79jcp2VAYyPcL_dq-_RaAuN131DlHRVacqfjDJzJJP2UIoprwnMG7dCVyT3q_TcW88iFJ-lDsrAOmsjfRsf6rhsJgQ8E66s1qzT7NeU00361ajQpP7GoFksI0X_BycWnUuCNy520"
    },
    {
        name: "FERRARI 812",
        subtitle: "Superfast V12",
        price: "$412,000",
        hp: "789",
        zeroToSixty: "2.9",
        mileage: "1,120",
        badge: "CERTIFIED",
        badgeStyle: "red",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiUPaterb0qdI2udMcwdfmA286iN6q7JApj3Qlqg1WgH4f6qyKlQ7y0zewt-J27aX1DwsEPGysAUJL_hL0vKHn8-bWMjPeu0fXzAKeFaigoSzr-98nkKSEIj2Xc68NfvMB66qi4uRRMBy_uRLYpmwK5-phw2NVPtpzfprSZWU00JJef6eFeoSRhUWaA860uV1x50-XAG9CCFYIZJ5p1G7uw1R15o933TGkeNip0z2mdyYWUHgmD1Rbd7U87TmmZMmwJRWa6XZ8LeQ"
    },
    {
        name: "AUDI R8 V10",
        subtitle: "Performance Quattro",
        price: "$245,000",
        hp: "602",
        zeroToSixty: "3.2",
        mileage: "8,450",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9tmo6G9CLYH-bXBtSaT-BHkdszlTRCBzeRoMINPlBEadNKCLtcgVvQO7su--bWi3e3vI5q2ZSES7V1ZEOPVkd3aJoCkJTzKNUO7dzdw1AHxeuniTbythbmLswYCuCVvSKtp4atKajryqG62EoTMiB1DN4fFWghZ1h64rEEU5nwtisHWZvQ4C84c9Bzl4utslPhP7cNlvONl474Jb3T8nvCM5rXqMNLIUedIpFcCk3NCcX_pNHkHw9eHvP14vdd_Hdec8lI_0v5ww"
    }
];

const specStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
};

const specIconStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.5)',
};

export default function InventorySection() {
    return (
        <section id="inventory" style={{ padding: '96px 0', background: '#131313', position: 'relative', zIndex: 10 }}>
            {/* Section Header */}
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', marginBottom: '64px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', padding: '48px 0' }}
                >
                    <div style={{
                        position: 'absolute',
                        left: '-16px',
                        top: 0,
                        width: '3px',
                        height: '96px',
                        background: '#EE3F2C',
                    }} />
                    <h2 className="text-headline-xl" style={{ color: 'white', textTransform: 'uppercase', marginBottom: '8px' }}>
                        THE FLEET
                    </h2>
                    <p className="text-label-md" style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                        CURATED HIGH-PERFORMANCE INVENTORY
                    </p>
                </motion.div>
            </div>

            {/* Filter Bar */}
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', marginBottom: '48px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="liquid-glass"
                    style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '32px' }}
                >
                    {[
                        { label: 'Select Brand', options: ['All Manufacturers', 'Ferrari', 'Lamborghini', 'Porsche', 'McLaren'] },
                        { label: 'Body Type', options: ['All Types', 'Coupe', 'Convertible', 'Track Only'] },
                        { label: 'Price Range', options: ['$200k - $500k', '$500k - $1M', '$1M+'] },
                    ].map((filter, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '10px', color: '#EE3F2C', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                                {filter.label}
                            </span>
                            <select style={{
                                background: 'transparent',
                                borderTop: 'none',
                                borderLeft: 'none',
                                borderRight: 'none',
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                                color: 'white',
                                fontFamily: "'Rubik', sans-serif",
                                fontWeight: 700,
                                fontSize: '14px',
                                padding: '4px 32px 4px 0',
                                outline: 'none',
                                cursor: 'pointer',
                                appearance: 'none' as const,
                            }}>
                                {filter.options.map((opt) => (
                                    <option key={opt} style={{ background: '#131313' }}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            42 Vehicles Found
                        </span>
                        <button style={{ padding: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', cursor: 'pointer' }}>
                            <span className="material-symbols-outlined" style={{ color: 'white', fontSize: '20px' }}>grid_view</span>
                        </button>
                        <button style={{ padding: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', cursor: 'pointer' }}>
                            <span className="material-symbols-outlined" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '20px' }}>list</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Vehicle Grid */}
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                gap: '32px',
            }}>
                {vehicles.map((v, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                        className="liquid-glass clipped-card"
                        style={{
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                        }}
                        whileHover={{ y: -8 }}
                    >
                        {/* Image */}
                        <div style={{ position: 'relative', height: '256px', overflow: 'hidden' }}>
                            <img
                                alt={v.name}
                                src={v.image}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                            />
                            {v.badge && (
                                <div style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    background: v.badgeStyle === 'glass' ? 'rgba(255,255,255,0.1)' : '#EE3F2C',
                                    backdropFilter: v.badgeStyle === 'glass' ? 'blur(12px)' : undefined,
                                    color: 'white',
                                    fontSize: '10px',
                                    fontWeight: 900,
                                    padding: '4px 8px',
                                    letterSpacing: '-0.02em',
                                    fontStyle: 'italic',
                                }}>
                                    {v.badge}
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div style={{ padding: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                <div>
                                    <h3 className="text-headline-md" style={{ color: 'white', textTransform: 'uppercase', fontSize: '20px' }}>
                                        {v.name}
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '2px' }}>
                                        {v.subtitle}
                                    </p>
                                </div>
                                <span style={{ color: '#EE3F2C', fontFamily: "'Rubik', sans-serif", fontWeight: 700, fontSize: '18px', letterSpacing: '-0.02em' }}>
                                    {v.price}
                                </span>
                            </div>

                            {/* Specs */}
                            <div style={{
                                display: 'flex',
                                gap: '16px',
                                marginBottom: '24px',
                                color: 'rgba(255,255,255,0.5)',
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                borderTop: '1px solid rgba(255,255,255,0.05)',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                padding: '12px 0',
                            }}>
                                <span style={specStyle}>
                                    <span className="material-symbols-outlined" style={specIconStyle}>speed</span>
                                    {v.hp} HP
                                </span>
                                <span style={specStyle}>
                                    <span className="material-symbols-outlined" style={specIconStyle}>timer</span>
                                    {v.zeroToSixty}s
                                </span>
                                <span style={specStyle}>
                                    <span className="material-symbols-outlined" style={specIconStyle}>distance</span>
                                    {v.mileage} MI
                                </span>
                            </div>

                            {/* CTA */}
                            <button
                                className="clipped-corner"
                                style={{
                                    width: '100%',
                                    background: '#EE3F2C',
                                    color: 'white',
                                    fontFamily: "'Rubik', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '13px',
                                    textTransform: 'uppercase',
                                    padding: '16px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s',
                                    letterSpacing: '0.05em',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = '#ff5540'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = '#EE3F2C'; }}
                            >
                                View Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination */}
            <div style={{ maxWidth: '1280px', margin: '64px auto 0', padding: '0 32px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                {[1, 2, 3, '...', 7].map((p, i) => (
                    <button key={i} className={p === 1 ? 'liquid-glass' : ''} style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: p === 1 ? undefined : 'transparent',
                        border: 'none',
                        color: p === 1 ? '#EE3F2C' : 'rgba(255,255,255,0.4)',
                        fontFamily: "'Rubik', sans-serif",
                        fontWeight: p === 1 ? 900 : 400,
                        fontStyle: p === 1 ? 'italic' : 'normal',
                        cursor: typeof p === 'number' ? 'pointer' : 'default',
                        fontSize: '14px',
                    }}>
                        {p}
                    </button>
                ))}
            </div>
        </section>
    );
}
