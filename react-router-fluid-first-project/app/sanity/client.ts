import {createClient} from "@sanity/client";

export const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
  preview: {
    enabled: true,
    active: true,
    token: process.env.SANITY_VIEWER_TOKEN
  },
  stega: {
    enabled: true,
    studioUrl: process.env.PUBLIC_SANITY_STUDIO_URL,
  },
});
