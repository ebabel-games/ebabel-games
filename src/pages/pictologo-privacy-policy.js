import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainHeader from "../components/main-header";
import Nav from "../components/nav";
import ContentBlock from "../components/content-block";
import Footer from "../components/footer";

const PictologoPrivacyPolicy = () => (
  <Layout>
    <SEO title="Pictologo" keywords={[`privacy policy`, `Pictologo game`]} />
    <MainHeader title="Pictologo" subtitle="Privacy Policy" />

    <Nav />

    <section className="container">
      <ContentBlock title="Pictologo stores no data">
        <p>The Pictologo game does not store any of your data. When children play Pictologo, their data stays on the mobile device. No attempt will ever be made to collect any data whatsoever.</p>
        <p>If you have any concern about this privacy policy, feel free to <a href="mailto:hello@ebabel.eu">get in touch</a> by email.</p>
        <p>Our Privacy Officer, Thomas Amar, will gladly answer any question you may have.</p>
      </ContentBlock>
    </section>

    <Footer />
  </Layout>
);

export default PictologoPrivacyPolicy;
