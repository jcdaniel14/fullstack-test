import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { fakeUsers } from "../core/domain/data/fake-users.ts";
import { CreateUserSchema } from "../core/domain/users/validator.ts";

export const usersRoute = new Hono();
usersRoute.get("/", (c) => {
  return c.json({ users: fakeUsers });
});

usersRoute.post("/", zValidator("json", CreateUserSchema), (c) => {
  const user = c.req.valid("json");
  fakeUsers.push({ ...user, user_id: 0, status: "inactive" });
  return c.json({ status: "ok" });
});

usersRoute.delete("/:user_id", (c) => {
  const user_id = Number.parseInt(c.req.param("user_id"));
  return c.json({ user: user_id });
});
