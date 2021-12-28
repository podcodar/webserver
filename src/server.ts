import { Application } from "oak";
import * as log from "logging";

async function startupServices() {
  log.debug("Initializing services...");
  await new Promise((r) => r("Startup services"));
  log.debug("Initializing services done!");
}

async function run() {
  const app = new Application();
  // Bootstrap services
  await startupServices();

  // TODO: add middleware
  // TODO: add routes

  // listen fetches with oak server
  // addEventListener("fetch", app.listen);
  app.use((ctx) => {
    ctx.response.body = "Hello world!";
  });

  const port = 8000;
  log.info(`start server in localhost:${port}`);
  await app.listen({ port });
}

await run();
