import type { User } from "../users/validator.ts";

export const fakeUsers: User[] = [
  { user_id: 1, name: "John", role: "Administrator", status: "active" },
  { user_id: 2, name: "Lisa", role: "Guest", status: "active" },
  { user_id: 3, name: "Fred", role: "Guest", status: "inactive" },
  { user_id: 4, name: "Nolan", role: "Administrator", status: "active" },
];
