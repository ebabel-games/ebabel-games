import * as React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainHeader from '../components/main-header';
import Nav from '../components/nav';
import ContentBlock from '../components/content-block';
import NewsletterSignup from '../components/newsletter-signup';
import Footer from '..//components/footer';

const FreeGames = () => (
  <Layout>
    <SEO description="" lang="en" meta="" keywords={[`HTML5 games`, `freelance developer`]} title="Free Games" />
    <MainHeader title="Free games" subtitle="HTML5 games I developed" />

    <Nav />

    <section className="container games">
      <ContentBlock image="nov-2018">
        <h1><a href="https://nov2018-game.firebaseapp.com/">Nov 2018</a></h1>
      </ContentBlock>

      <ContentBlock image="guess-my-number">
        <h1><a href="https://which-number.firebaseapp.com/">Guess my number</a></h1>
      </ContentBlock>

      <ContentBlock image="capture-aliens">
        <h1><a href="https://alien-capture.firebaseapp.com/">Capture Aliens</a></h1>
      </ContentBlock>

      <ContentBlock image="the-questionables">
        <h1><a href="https://the-questionables.firebaseapp.com/">Global Game Jam 2019</a></h1>
      </ContentBlock>

      <ContentBlock image="pictologo">
        <h1><a href="https://play.google.com/store/apps/details?id=nl.websitekrijgen.androidgames.palabras.nl">Pictologo App (&euro;0.59)</a></h1>
      </ContentBlock>
    </section>

    <section className="container">
      <ContentBlock title="Free game news">
        <NewsletterSignup />
      </ContentBlock>

      <ContentBlock title="Unfinished games">
        <ul>
          <li><a href="https://enchantment.firebaseapp.com/">Enchantment</a></li>
          <li><a href="https://population-game-156015.firebaseapp.com/">Magical Hex</a></li>
        </ul>
      </ContentBlock>
    </section>

    <Footer />
  </Layout>
);

export default FreeGames;
