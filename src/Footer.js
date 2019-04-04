import React from 'react';

import Telephone from './Telephone';
import Email from './Email';

export default () => (
  <footer className="container">
    <p>
      Tel: <Telephone /> &bull; E-mail: <Email />
    </p>
    <p>
      <abbr title="Zelfstandige Zonder Personeel" lang="nl-nl">ZZP</abbr> Thomas Amar &bull; <abbr title="Kamer van Koophandel" lang="nl-nl">KvK</abbr> <span title="Amsterdam Chamber of Commerce registration number">74269100</span> &bull; <abbr title="Belasting over de Toegevoegde Waarde" lang="nl-nl">BTW</abbr> <span title="Value Added Tax (VAT) number">NL784074070B02</span>
    </p>
  </footer>
);
