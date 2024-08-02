import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import { usersRoute } from "./routes/users.ts";

const app = new Hono();
app.use("*", logger());

//Routes
app.route("/api/v1/users", usersRoute);

app.get("*", serveStatic({ root: "/frontend/dist" }));
app.get("*", serveStatic({ path: "/frontend/dist/index.html" }));
export default app;
