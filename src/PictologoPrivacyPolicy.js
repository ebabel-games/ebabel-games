import React from "react";

import MainHeader from "./MainHeader";
import Nav from "./Nav";
import ContentBlock from "./ContentBlock";
import Footer from "./Footer";

export default () => (
  <>
    <MainHeader title="Pictologo" subtitle="Privacy Policy" />
    <Nav />
    <section className="container">
      <ContentBlock title="Pictologo doesn't store any data">
        <p>The Pictologo game does not store your data. When children play Pictologo, their data stays on the mobile device. No attempt will ever be made to collect any data whatsoever.</p>
        <p>If you have any concern about this privacy policy, feel free to <a href="mailto:hello@ebabel.eu">get in touch</a> by e-mail.</p>
        <p>Our Privacy Officer, Thomas Amar, will gladly answer any question you may have.</p>
      </ContentBlock>
    </section>
    <Footer />
  </>
);
