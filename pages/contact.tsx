import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              I am available Mo-Fri via the following channels:
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: martin3er@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
