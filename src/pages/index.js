import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainHeader from "../components/main-header";
import Nav from "../components/nav";
import ContentBlock from "../components/content-block";
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="React.js Freelancer" keywords={[`react.js freelancer`, `node.js freelancer`, `amsterdam freelancer`, `front-end freelancer`]} />
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
          You can <Link to="/free-games">play games</Link> I programmed; their <a href="https://github.com/ebabel-games">source code</a> is published on a Github team where I am hoping other developers will join me.
        </p>
      </ContentBlock>
    </section>
    <Footer />
  </Layout>
);

export default IndexPage;
