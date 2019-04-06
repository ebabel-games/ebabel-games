import React from "react";

import Telephone from "./Telephone";
import Email from "./Email";

export default () => (
  <footer className="container">
    <p><small><a href="/pictologo-privacy-policy">Pictologo</a></small></p>
    <p>
      Tel:&nbsp;<Telephone /> &bull; Email:&nbsp;<Email />
    </p>
    <p>
      <abbr title="Zelfstandige Zonder Personeel" lang="nl-nl">ZZP</abbr>&nbsp;Thomas Amar &bull; <abbr title="Kamer van Koophandel" lang="nl-nl">KvK</abbr>&nbsp;<span title="Amsterdam Chamber of Commerce registration number">74269100</span> &bull; <abbr title="Belasting over de Toegevoegde Waarde" lang="nl-nl">BTW</abbr>&nbsp;<span title="Value Added Tax (VAT) number">NL784074070B02</span>
    </p>
  </footer>
);
