import { User } from "../types/User";

export const MOCK_USERS: User[] = [
  {
    id: "1",
    username: "admin",
    password: "admin123",
    name: "Admin",
    phoneNumber: "08123123123",
    email: "admin@example.com",
    role: "admin",
  },
  {
    id: "2",
    username: "user",
    password: "user123",
    name: "User",
    phoneNumber: "0812121212",
    email: "user@example.com",
    role: "user",
  },
];
