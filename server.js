import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.type('html').send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hello, world!</title>
  <style>
    :root {
      color-scheme: light dark;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #0f172a;
      color: #f8fafc;
    }
    * { box-sizing: border-box; }
    body {
      min-height: 100vh;
      margin: 0;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at top, #1e3a8a 0, #0f172a 45%, #020617 100%);
    }
    main {
      text-align: center;
      padding: 2rem;
    }
    h1 {
      margin: 0;
      font-size: clamp(3rem, 10vw, 7rem);
      line-height: 1;
      letter-spacing: -0.08em;
    }
    p {
      margin: 1rem 0 0;
      color: #cbd5e1;
      font-size: clamp(1rem, 2vw, 1.35rem);
    }
  </style>
</head>
<body>
  <main>
    <h1>Hello, world!</h1>
    <p>This site is live on loser.vibekit.bot</p>
  </main>
</body>
</html>`);
});

app.listen(port, () => {
  console.log(`Hello World site listening on port ${port}`);
});
