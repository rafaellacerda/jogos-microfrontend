import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@rl/jogo-memoria",
  app: () => System.import("@rl/jogo-memoria"),
  activeWhen: (location) => location.pathname === "/memoria",
});

registerApplication({
  name: "@rl/jogo-velha",
  app: () => System.import("@rl/jogo-velha"),
  activeWhen: (location) => location.pathname === "/velha",
});

start({
  urlRerouteOnly: true,
});
