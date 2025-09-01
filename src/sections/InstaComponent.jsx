const InstaComponent = () => {
  const images = ['/images/image_5.png', '/images/image_6.png', '/images/image_7.png', '/images/image_8.png']

  return (
    <section style={{ padding: '10px', background: '#fff' }}>
      <div style={{ fontSize: '40px', fontWeight: 700, textAlign: 'center', color: '#8E1C21' }}>FIND US ON INSTAGRAM</div>
      <div style={{ height: '1rem' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {images.map((src, i) => (
          <div key={i} style={{ width: '100%', paddingBottom: '100%', position: 'relative', overflow: 'hidden' }}>
            <img src={src} alt={`insta-${i + 1}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default InstaComponent
