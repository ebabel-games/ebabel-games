import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainHeader from "../components/main-header";
import Nav from "../components/nav";
import ContentBlock from "../components/content-block";
import Footer from "../components/footer";

const NotFound = () => (
  <Layout>
    <SEO title="Page not found" keywords={[`error 404`, `page not found`]} />
    <MainHeader title="Page not found" subtitle="Probably not your fault" />
 
    <Nav />
 
    <section className="container">
      <ContentBlock title="Sorry, page cannot be found">
        <p>Thanks for visiting my site, but the page you tried to browse cannot be found.</p>
        <p>Would you like to see the <Link to="/">homepage</Link> instead?</p>
        <p>If you think this page should exist, feel free to <a href="mailto:hello@ebabel.eu">drop me an email</a>.</p>
      </ContentBlock>
    </section>
 
    <Footer />
  </Layout>
);

export default NotFound;
