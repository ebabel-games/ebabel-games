import React from 'react';

import MainHeader from './MainHeader';
import Nav from './Nav';
import ContentBlock from './ContentBlock';
import Footer from './Footer';

export default () => (
  <>
    <MainHeader title="Free games" subtitle="HTML5 games I developed" />
    <Nav />
    <section className="container">
      <ContentBlock title="Lorem ipsum">
        <p>Lorem ipsum dolor sit amet</p>
      </ContentBlock>
    </section>
    <Footer />
  </>
);
