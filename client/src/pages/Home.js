import { Link } from 'react-router-dom';

function Home() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)' }}
    >
      <div>
        {/* <p style={{ color: '#e94560', letterSpacing: '4px', textTransform: 'uppercase' }}>
          Welcome to my portfolio
        </p> */}
        <h1 className="display-3 fw-bold mb-3">
          Hi, I'm <span style={{ color: '#e94560' }}>Omkar</span>
        </h1>
        <p className="lead mb-3" style={{ color: '#a8b2d8' }}>
          B.Tech CSE &nbsp;|&nbsp; M.Tech ESS
        </p>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#8892b0' }}>
          Passionate about Machine Learning, Deep Learning, and building intelligent software systems that solve real-world problems.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/projects" className="btn btn-danger px-4 py-2">View My Work</Link>
          <Link to="/contact" className="btn btn-outline-light px-4 py-2">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;