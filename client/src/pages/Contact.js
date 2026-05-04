import { useState } from 'react';
import API from '../api';               // ← import the axios instance

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Send POST request to Express backend
      await API.post('/contact', formData);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const isLoading = status === 'loading';

  return (
    <section
      className="d-flex align-items-center"
      style={{ minHeight: '100vh', background: '#0d0d1a', color: '#ccd6f6', paddingTop: '80px' }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-2" style={{ color: '#e94560' }}>
          Contact Me
        </h2>
        <p className="text-center mb-1" style={{ color: '#8892b0' }}>
          Let's work together
        </p>
        <p className="text-center mb-5" style={{ color: '#e94560', fontSize: '0.9rem' }}>
          omkar.patil@iitgn.ac.in
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="p-4 rounded"
              style={{ background: '#1a1a2e', border: '1px solid #e9456033' }}
            >
              {status === 'success' ? (
                <div className="text-center py-5">
                  <div style={{ fontSize: '3.5rem' }}>✅</div>
                  <h4 className="mt-3 fw-bold" style={{ color: '#e94560' }}>Message Sent!</h4>
                  <p style={{ color: '#8892b0' }}>
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    className="btn btn-outline-danger mt-2 px-4"
                    onClick={() => setStatus('')}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label" style={{ color: '#8892b0', fontSize: '0.85rem' }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="form-control"
                      style={{ background: '#0d0d1a', border: '1px solid #e9456055', color: '#ccd6f6' }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" style={{ color: '#8892b0', fontSize: '0.85rem' }}>
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="form-control"
                      style={{ background: '#0d0d1a', border: '1px solid #e9456055', color: '#ccd6f6' }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label" style={{ color: '#8892b0', fontSize: '0.85rem' }}>
                      YOUR MESSAGE
                    </label>
                    <textarea
                      name="message"
                      placeholder="Hi, I'd like to talk about..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      rows="5"
                      className="form-control"
                      style={{ background: '#0d0d1a', border: '1px solid #e9456055', color: '#ccd6f6', resize: 'none' }}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      className="mb-3 p-3 rounded text-center"
                      style={{ background: '#e9456022', border: '1px solid #e94560', color: '#e94560' }}
                    >
                      ⚠️ Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-danger w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;