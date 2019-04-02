import React from 'react';

import MainHeader from './MainHeader';
import Nav from './Nav';
import ContentBlock from './ContentBlock';
import Footer from './Footer';

export default () => (
  <>
    <MainHeader />
    <Nav />
    <section class="container">
      <ContentBlock title="Working together">
        <p>I'm passionate about all things <em>Javascript</em>, both on the front-end and the backend: <em>React.js</em> components, <em>Node.js</em> APIs, socket.io, unit <em>testing</em> and end to end testing with test <em>coverage</em>, webpack, and performance testing.</p>
      </ContentBlock>
      <ContentBlock title="Linkedin, CV, and Github">
        <p>
          <a href="cv.pdf">Download my CV</a>: it's a summarized version of my work history.
        </p>
        <p>
          You can find out more details about my
          <a href="https://www.linkedin.com/in/thomasamar">work experience</a> on Linkedin.
        </p>
        <p>
          My <a href="https://github.com/ebabel-eu?tab=repositories">personal projects</a> are published on Github.
        </p>
        <p>
          I also programmed <a href="https://github.com/ebabel-games">games</a> under a separate Github and you can <a href="/free-games">play</a> some of them.
        </p>
      </ContentBlock>
      <ContentBlock title="Contact">
        <p>
          Feel free to call my mobile on
          <span class="contact"><a href="tel:0031621809899">+31 (0)6 21 80 98 99</a></span>
        </p>
        <p>
          You can also drop me an e-mail
          <span class="contact"><a href="mailto:hello@ebabel.eu">hello@ebabel.eu</a></span>
        </p>
      </ContentBlock>
    </section>
    <Footer />
  </>
);
