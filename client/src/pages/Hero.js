function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)' }}
    >
      <div>
        <p className="text-uppercase letter-spacing mb-2" style={{ color: '#e94560', letterSpacing: '4px' }}>
          Welcome to my portfolio
        </p>
        <h1 className="display-3 fw-bold mb-3">
          Hi, I'm <span style={{ color: '#e94560' }}>Your Name</span>
        </h1>
        <p className="lead mb-4" style={{ color: '#a8b2d8' }}>
          B.Tech Computer Engineering &nbsp;|&nbsp; M.Tech Earth System Science
        </p>
        <p className="mb-5" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#8892b0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Passionate about applying Machine Learning and Deep Learning to large-scale Earth system data.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <a href="#projects" className="btn btn-danger px-4 py-2">View My Work</a>
          <a href="#contact" className="btn btn-outline-light px-4 py-2">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;