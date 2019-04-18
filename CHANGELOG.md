# Changelog

# [v3.3.3](https://github.com/ebabel-games/ebabel-games/releases/tag/v3.3.3)
- Fix: npm audit security issues.
- Rewrite code in Typescript.

# [v3.3.2](https://github.com/ebabel-games/ebabel-games/releases/tag/v3.3.2)
- Fix: in offline mode, the cv is not available.

# [v3.3.1](https://github.com/ebabel-games/ebabel-games/releases/tag/v3.3.1)
- Fix the pictologo image (webp) in Games page because Safari doesn't support it.

# [v3.3.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v3.3.0)
- Add unit tests with [Jest and Gatsby](https://www.gatsbyjs.org/docs/unit-testing/).
- Add test coverage reporting (istanbul).
- Remove little squares, they are confusing (Eve advice), and simply the css styling.
- On Games page, add link to Pictologo Android app.

# [v3.2.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v3.2.0)
- Implement PWA (Progressive Web App) offline included - see Chrome Lighthouse audits and [gatsby config for offline](./gatsby-config.js).
- Update icon to use HTML5 shield (also in favicon) instead of Gatsby icon.

# [v3.1.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v3.1.0)
- Make the sitemap dynamic so that everytime a production build is generated in public, the xml sitemap lists all the correct pages.

# [v3.0.1](https://github.com/ebabel-games/ebabel-games/releases/tag/v3.0.1)
- Fix javascript error in navigation because attribute exact is no longer needed with Gatsby.

# [v3.0.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v3.0.0)
- Switch the build process to [Gatsby.js](https://www.gatsbyjs.org) because Gatsby offers more options than react-snap.
- Improve structure of src folder.

# [v2.3.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v2.3.0)
- Update page header title for history.
- Fix link in footer to use NavLink instead of simple anchor tag.
- Change CV filename to react-freelancer-cv.pdf instead of just cv.pdf.

# [v2.2.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v2.2.0)
- Add xml sitemap for [Google search console](https://search.google.com/search-console/).
- Update credits in humans.txt for the game developed at Global Game Jam 2019 in Utrecht.
- Update content of footer: shorter pictologo link, non breaking spaces between label and text.
- Update homepage text.
- Adapt the newsletter signup css further to better match the site style and pass the accessibility audits (color contrast).
- Simplify postbuild.js since only one file is deleted (200.html).
- Output errors to the Terminal console when something goes wrong in postbuild.js

# [v2.1.2](https://github.com/ebabel-games/ebabel-games/releases/tag/v2.1.2)
- Fix the footer: it's correct on the homepage but on the other pages it's missing the link to Pictologo privacy page?

# [v2.1.1](https://github.com/ebabel-games/ebabel-games/releases/tag/v2.1.1)
- Fix Google Analytics.

# [v2.1.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v2.1.0)
- Improve Page not found.
- The audit score shows the website has gone from [very fast](assets/building/chrome-audit-score-2019-03-24.png)  (html only) to [much slower](assets/building/chrome-audit-score-2019-04-04.png) (react.js) -> look into improving this, possibly with server side react rendering, or even dev environment build that takes React components and makes them 100% static for my static hosting.

# [v2.0.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v2.0.0)
- Use nano-react-app to make this website into a minimal React app.
- Implement React.js components for the homepage.
- Setup [routing](https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e) to show different pages.
- Implement React.js components for the games page.
- Implement React.js components for the Pictologo privacy policy page.

# [v1.2.2](https://github.com/ebabel-games/ebabel-games/releases/tag/v1.2.2)
- Change the inactive navigation item to black, to improve accessibility (color contrast).
- Add google analytics to homepage and pictologo privacy policy page.

# [v1.2.1](https://github.com/ebabel-games/ebabel-games/releases/tag/v1.2.1)
- Improve layout of the games page by making it more responsive.

# [v1.2.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v1.2.0)
- Add Pictologo privacy policy page.
- Add old assets files.

# [v1.1.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v1.1.0)
- Update homepage to have navigation.
- Add /free-games page.

# [v1.0.2](https://github.com/ebabel-games/ebabel-games/releases/tag/v1.0.2)
- Fix build that gets published to Firebase.

# [v1.0.1](https://github.com/ebabel-games/ebabel-games/releases/tag/v1.0.1)
- Update BTW number.

# [v1.0.0](https://github.com/ebabel-games/ebabel-games/releases/tag/v1.0.0)
- Basic version of my static website.
