import React from "react";

import MainHeader from "./MainHeader";
import Nav from "./Nav";
import ContentBlock from "./ContentBlock";
import Footer from "./Footer";

export default () => (
  <>
    <MainHeader title="Page not found" subtitle="Probably not your fault" />
    <Nav />
    <section className="container">
      <ContentBlock title="Sorry, page cannot be found">
        <p>Thanks for visiting my site, but the page you tried to browse cannot be found.</p>
        <p>Would you like to see the <a href="/">homepage</a> instead?</p>
        <p>If you think this page should exist, feel free to <a href="mailto:hello@ebabel.eu">drop me an e-mail</a>.</p>
      </ContentBlock>
    </section>
    <Footer />
  </>
);
