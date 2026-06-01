/** Minimal HTML error page for TanStack Start server middleware. */
export function renderErrorPage(message = "Something went wrong. Please try again.") {
  const safe = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Error — Silicofeller</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #fafafa; color: #0a0a0a; }
    main { max-width: 28rem; padding: 2rem; text-align: center; }
    h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
    p { color: #525252; font-size: 0.875rem; margin: 0 0 1.5rem; }
    a { color: #6d5af0; text-decoration: none; font-size: 0.875rem; font-weight: 500; }
  </style>
</head>
<body>
  <main>
    <h1>This page didn't load</h1>
    <p>${safe}</p>
    <a href="/">Go home</a>
  </main>
</body>
</html>`;
}
