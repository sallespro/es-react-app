import { React, ReactDOM } from "https://unpkg.com/es-react";

import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

const Route = {
  "/": React.lazy(() => import("./routes/home.js")),
  "*": React.lazy(() => import("./routes/notfound.js"))
};

const Fallback = html`
  <div></div>
`;

ReactDOM.render(
  html`
    <${React.Suspense} fallback=${Fallback}>
      <${Route[window.location.pathname] || Route["*"]} />
    <//>
  `,
  document.body
);
