import { FaLinkedin, FaGithub } from 'react-icons/fa';

function About() {
  return (
    <section
      className="d-flex align-items-center"
      style={{ minHeight: '100vh', background: '#0a0a0a', color: '#ccd6f6', paddingTop: '80px' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">

            {/* Profile Image */}
            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
              style={{ width: '220px', height: '220px', background: 'linear-gradient(135deg, #e94560, #0f3460)', fontSize: '5rem' }}
            >
              <img
                src="/Me.jpeg"
                alt="Omkar"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>

            {/* LinkedIn & GitHub Icons below image */}
            <div className="mt-3 d-flex justify-content-center gap-3">
              <a                                                        
                href="https://www.linkedin.com/in/omkar-patil-28a59a2ab?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0077b5', fontSize: '2rem', transition: 'transform 0.2s' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaLinkedin />
              </a>
              <a                                                         
                href="https://github.com/Omkar2703"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', fontSize: '2rem', transition: 'transform 0.2s' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaGithub />
              </a>
            </div>

          </div>

          {/* About Text */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-1" style={{ color: '#e94560' }}>About Me</h2>
            <p style={{ color: '#8892b0' }}>
              Hello, I am a CSE graduate pursuing M.Tech ESS at IIT Gandhinagar with hands-on experience in ML/DL model development, data pipelines, and scalable software engineering. Adept at translating complex data into actionable intelligent solutions. Driven by a passion for building production-ready AI systems that solve meaningful problems.
            </p>
            <p style={{ color: '#8892b0' }}>
              My focus is on building robust software systems that integrate ML models and AI pipelines into scalable, production-ready applications. I specialize in bridging the gap between AI research and real-world engineering to deliver intelligent, impactful solutions.
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <p><span style={{ color: '#e94560' }}>▹</span> &nbsp; Name: Omkar Ramchandra Patil</p>
                <p><span style={{ color: '#e94560' }}>▹</span> &nbsp; Qualification: B.Tech CSE and M.Tech ESS</p>
              </div>
              <div className="col-6">
                <p><span style={{ color: '#e94560' }}>▹</span> &nbsp; Field: Soft Dev + ML / Deep Learning</p>
                <p><span style={{ color: '#e94560' }}>▹</span> &nbsp; Location: IIT Gandhinagar Campus</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;