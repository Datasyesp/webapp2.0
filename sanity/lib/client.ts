import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "s6d1lu7x",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
