import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {shopifyAssets} from 'sanity-plugin-shopify-assets'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'fluid-hydrogen-sanity-theme',

  projectId: 'rbwviym2',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    shopifyAssets({
      shopifyDomain: '*.myshopify.com'
    }),
    presentationTool({

      previewUrl: {
        origin: 'http://localhost:5173',
        preview: "/",
        previewMode: {
          enable: "/api/preview-mode/enable",
          disable: "/api/preview-mode/disable",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
