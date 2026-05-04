const skillsData = [
  { category: 'Programming',      skills: ['Python', 'Java', 'C++', 'SQL'] },
  { category: 'ML / Deep Learning', skills: ['Numpy/Pandas', 'PyTorch', 'Scikit-learn', 'Keras', 'geemap', 'geopandas'] },
  { category: 'Web Development',  skills: ['React JS', 'Node JS', 'Express JS', 'MongoDB'] },
  { category: 'Tools & Others',   skills: ['Git', 'Docker', 'Jupyter', 'GEE', 'WebRTC', 'Socket io'] }
];

function Skills() {
  return (
    <section
      className="d-flex align-items-center"
      style={{ minHeight: '100vh', background: '#0d0d1a', color: '#ccd6f6', paddingTop: '80px' }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-2" style={{ color: '#e94560' }}>Skills</h2>
        <p className="text-center mb-5" style={{ color: '#8892b0' }}>Technologies I have work with</p>
        <div className="row g-4">
          {skillsData.map((group) => (
            <div className="col-md-6 col-lg-3" key={group.category}>
              <div
                className="p-4 h-100 rounded"
                style={{ background: '#1a1a2e', border: '1px solid #e9456033' }}
              >
                <h5 className="mb-3" style={{ color: '#e94560' }}>{group.category}</h5>
                {group.skills.map((skill) => (
                  <div key={skill} className="mb-2 d-flex align-items-center gap-2">
                    <span style={{ color: '#e94560' }}>▹</span>
                    <span style={{ color: '#a8b2d8' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;