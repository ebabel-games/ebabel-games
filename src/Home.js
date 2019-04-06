import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';

import MainHeader from "./MainHeader";
import Nav from "./Nav";
import ContentBlock from "./ContentBlock";
import Footer from "./Footer";

export default () => (
  <>
    <Helmet>
      <title>React.js Freelancer</title>
    </Helmet>
    <MainHeader title="Thomas Amar" subtitle="React.js & Node.js Freelancer" />
    <Nav />
    <section className="container">
      <ContentBlock title="Working together">
        <p>I am passionate about all things <em>Javascript</em>, both on the front-end and the backend: <em>React.js</em> components, <em>Node.js</em> APIs, socket.io, unit <em>testing</em> and end to end testing with test <em>coverage</em>, webpack, and performance testing.</p>
      </ContentBlock>
      <ContentBlock title="Linkedin, CV, and Github">
        <p>
          <a href="/react-freelancer-cv.pdf?forcedownload=1" download target="_blank">Download my CV</a>: it's a summarized version of my work history.
        </p>
        <p>
          You can find out more details about my <a href="https://www.linkedin.com/in/thomasamar">work experience</a> on Linkedin.
        </p>
        <p>
          My <a href="https://github.com/ebabel-eu?tab=repositories">personal projects</a> are published on Github.
        </p>
        <p>
          You can <NavLink to="/free-games">play games</NavLink> I programmed; their <a href="https://github.com/ebabel-games">source code</a> is published on a Github team where I am hoping other developers will join me.
        </p>
      </ContentBlock>
    </section>
    <Footer />
  </>
);
