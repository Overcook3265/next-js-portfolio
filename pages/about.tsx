import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Here will be some basic additional info about me, what makes me
              tick and how we could collaborate in the future!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
