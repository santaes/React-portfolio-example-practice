import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7zi8heu',
        'template_wo96vpk',
        form.current,
        '8BC5pvk3oHLuGJIXI',
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>oleksandrsukharyev@gmail.com</h5>
            <a href='mailto:oleksandrsukharyev@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Oleksander Sukharyev</h5>
            <a
              href='https://m.me/oleksander.sukharyev.1'
              target='_blank'
              rel='noreferrer'
            >
              Start a Messenger conversation
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+34632296384</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+34632296384'
              target='_blank'
              rel='noreferrer'
            >
              Start a WhatsApp conversation
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <div className='grow-wrap'>
            <textarea
              name='message'
              rows='7'
              placeholder='Your Message'
              required
            ></textarea>
          </div>

          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
