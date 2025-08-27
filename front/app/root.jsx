import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Snippet Manager" },
    { name: "description", content: "Gerencie snippets de código com AI" }
  ];
};

export default function Root() {
  return (
    <html lang="pt-BR">
      <head>
        <Meta />
        <Links />
      </head>
      
      <body className="font-sans">
        <h1>tjeoisjfoijsa fojf osi fsiofsa</h1>

        <Outlet /> 
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
