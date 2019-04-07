import React from "react";

import MainHeader from "../components/main-header";
import Nav from "../components/nav";
import ContentBlock from "../components/content-block";
import Footer from "../components/footer";

export default () => (
  <>
    <MainHeader title="Page not found" subtitle="Probably not your fault" />
    <Nav />
    <section className="container">
      <ContentBlock title="Sorry, page cannot be found">
        <p>Thanks for visiting my site, but the page you tried to browse cannot be found.</p>
        <p>Would you like to see the <a href="/">homepage</a> instead?</p>
        <p>If you think this page should exist, feel free to <a href="mailto:hello@ebabel.eu">drop me an email</a>.</p>
      </ContentBlock>
    </section>
    <Footer />
  </>
);
