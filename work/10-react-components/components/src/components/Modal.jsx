import { useState } from 'react';
import Button from './Button';
import './Modal.css';

function Modal({ open, onClose }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Form submitted successfully!');
  };

  return (
    <dialog open={open}>
      <h2>Subscription?</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Please input your email..." required />
        <Button type="submit" visual="link">Submit</Button>
        <Button type="button" visual="button" onClick={onClose}>Close</Button>
      </form>
      {message && <p className="message">{message}</p>}
    </dialog>
  );
}

export default Modal;
