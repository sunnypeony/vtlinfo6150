import { useState } from 'react';
import './ContactPage.css';
import { validateEmail, validateRequired, getValidationMessage } from '../utils/validation.js';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate name
    if (!validateRequired(formData.name)) {
      newErrors.name = getValidationMessage('Name', 'required');
    }

    // Validate email
    if (!validateRequired(formData.email)) {
      newErrors.email = getValidationMessage('Email', 'required');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = getValidationMessage('Email', 'email');
    }

    // Validate message
    if (!validateRequired(formData.message)) {
      newErrors.message = getValidationMessage('Message', 'required');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form submitted successfully (no data storage, just demo)
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <main id="main-content" className="contact-page">
        <div className="container">
          <h1>Thank You for Contacting Us</h1>
          <p>We have received your message and will reply as soon as possible!</p>
          <button 
            className="contact-page__reset-button"
            onClick={() => {
              setShowForm(true);
              setFormData({ name: '', email: '', message: '' });
              setErrors({});
            }}
          >
            Send New Message
          </button>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
          <div className="contact-page__form-group">
            <label htmlFor="name" className="contact-page__label">
              Name <span className="contact-page__required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`contact-page__input ${errors.name ? 'contact-page__input--error' : ''}`}
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className="contact-page__error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact-page__form-group">
            <label htmlFor="email" className="contact-page__label">
              Email <span className="contact-page__required">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className={`contact-page__input ${errors.email ? 'contact-page__input--error' : ''}`}
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="contact-page__error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="contact-page__form-group">
            <label htmlFor="message" className="contact-page__label">
              Message <span className="contact-page__required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className={`contact-page__textarea ${errors.message ? 'contact-page__input--error' : ''}`}
              value={formData.message}
              onChange={handleChange}
              rows="5"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" className="contact-page__error" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className="contact-page__submit-button">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactPage;

