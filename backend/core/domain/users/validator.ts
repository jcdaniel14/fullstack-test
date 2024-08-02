import { z } from "zod";

const UserSchema = z.object({
  user_id: z.number().min(1),
  name: z.string(),
  role: z.string(),
  status: z.enum(["inactive", "active"]),
});

export const CreateUserSchema = UserSchema.omit({ user_id: true });

export type User = z.infer<typeof UserSchema>;
