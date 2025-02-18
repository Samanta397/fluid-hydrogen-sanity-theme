import type {FilteredResponseQueryOptions} from "@sanity/client";
import {getSession} from "~/sessions";
import * as process from "node:process";

async function previewContext(
  headers: Headers
): Promise<{ preview: boolean; options: FilteredResponseQueryOptions }> {
  const previewSession = await getSession(headers.get("Cookie"));

  const preview =
    previewSession.get("projectId") === process.env.PUBLIC_SANITY_PROJECT_ID;

  return {
    preview,
    options: preview
      ? {
        perspective: "previewDrafts",
        stega: true,
        token: process.env.SANITY_VIEWER_TOKEN,
      }
      : {
        perspective: "published",
        stega: false,
      },
  };
}

export {/* commitSession, destroySession,*/ getSession, previewContext};