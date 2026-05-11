const projectsData = [
  {
    title: 'Blockmeet-Decentralised Video conferencing platform',
    description: 'Developed a decentralized video conferencing app using a novel HydroCarbon peer-to-peer architecture, replacing centralized SFUs used by Zoom and Google Meet. Integrated IPFS for file sharing, Hardhat + Solidity smart contracts for on-chain meeting transparency, and WebRTC for real-time communication. Deployed client on Vercel and smart contracts on Polygon Testnet.',
    tags: ['MongoDB', 'ReactJS', 'Express Js',' Node Js', 'Tailwind CSS', 'WebRTC', 'HardHat + Solidity'],
    github: 'https://github.com/deepsalunkhee/BlockMeet',
    demo: 'https://block-meet.vercel.app/signin'
  },
  {
    title: 'Campus Assistant Chatbot',
    description: 'An AI-powered campus assistant chatbot that answers natural-language questions related to timetables, mess menus, events, laundry schedules, and faculty information, backed by a fine-tuned intent classification model and a full-stack web application. This project demonstrates how machine learning, backend systems, and modern frontend design can work together to build a practical conversational system.',
    tags: ['MongoDB', 'ReactJS', 'Express Js',' Node Js', 'Python', 'Fine-tuned intent classification model'],
    github: 'https://github.com/Omkar2703/IITGN_SERV_MOD',
    demo: '#'
  },
  {
    title: 'Collab Flow',
    description: 'A real-time project and task management SaaS app — think lightweight Notion + Trello hybrid with AI superpowers. Built with React, Node.js, Express, MongoDB Atlas, and Socket.io.',
    tags: ['MongoDB', 'ReactJS', 'Express Js',' Node Js', 'Mistral AI'],
    github: 'https://github.com/Omkar2703/Project1',
    demo: '#'
  },
  {
    title: 'Domain Model Assistant',
    description: 'Domain Model Assistant is an AI-powered web app that lets domain experts design and evolve database schemas using plain English — no SQL expertise needed. It uses LLM agents to generate versioned SQLite schemas, Mermaid ER diagrams, and test suites automatically. Every schema change is sandboxed in its own versioned database, making the entire process safe, auditable, and non-destructive.',
    tags: ['Python', 'Flask', 'SQLAlchemy + SQLite', 'OpenAI API', 'sqlglot', 'Jinja2 templates', 'Mermaid.js'],
    github: 'https://github.com/Omkar2703/SET_SDM.git',
    demo: '#'
  }
];

function Projects() {
  return (
    <section
      className="d-flex align-items-center"
      style={{ minHeight: '100vh', background: '#0a0a0a', color: '#ccd6f6', paddingTop: '80px' }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-2" style={{ color: '#e94560' }}>Projects</h2>
        <p className="text-center mb-5" style={{ color: '#8892b0' }}>Things I have built</p>
        <div className="row g-4">
          {projectsData.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <div
                className="p-4 h-100 rounded d-flex flex-column"
                style={{ background: '#1a1a2e', border: '1px solid #e9456033' }}
              >
                <div className="mb-2" style={{ color: '#e94560', fontSize: '2rem' }}>📁</div>
                <h5 className="fw-bold mb-2">{project.title}</h5>
                <p style={{ color: '#8892b0', flexGrow: 1 }}>{project.description}</p>
                <div className="d-flex flex-wrap gap-2 my-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded"
                      style={{ background: '#0f3460', color: '#e94560', fontSize: '0.75rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-3">
                  <a href={project.github} style={{ color: '#ccd6f6' }}>GitHub ↗</a>
                  <a href={project.demo} style={{ color: '#e94560' }}>Live Demo ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;