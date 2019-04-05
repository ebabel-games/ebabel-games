import React from 'react';

const hidden = {
  position: 'absolute',
  left: '-5000px',
};

export default () => (
  <div id="mc_embed_signup">
    <form action="//ebabel.us14.list-manage.com/subscribe/post?u=6b5203159a1a8d45b38971927&amp;id=11dbefc3c9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <div id="mc_embed_signup_scroll">
        <label htmlFor="mce-EMAIL">Get invitation-only games and free offers</label>
        <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your e-mail" required />
        <div style={hidden} aria-hidden="true">
          <input type="text" name="b_6b5203159a1a8d45b38971927_11dbefc3c9" tabIndex="-1" defaultValue="" />
        </div>
        <div className="clear">
          <input type="submit" defaultValue="Yes, subscribe me!" name="subscribe" id="mc-embedded-subscribe" className="button" />
        </div>
        <p>Your e-mail will not be shared with others and you can unsubscribe easily at any time</p>
      </div>
    </form>
  </div>
);
