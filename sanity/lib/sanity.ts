import { createClient } from "next-sanity"

const projectId = "s6d1lu7x"
const dataset = "production"
const apiVersion = "2023-05-03"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string
  qParams?: Record<string, any>
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",
    next: { tags },
  })
}
