import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "yesp",
  title: "YESP CMS",

  projectId: "s6d1lu7x",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
