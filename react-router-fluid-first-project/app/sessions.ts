import { createCookieSessionStorage } from "react-router";
import crypto from "node:crypto";

type SessionData = {
  userId: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      httpOnly: true,
      name: "__sanity_preview",
      path: "/",
      sameSite:  "lax",
      secrets: [crypto.randomBytes(16).toString("hex")],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };