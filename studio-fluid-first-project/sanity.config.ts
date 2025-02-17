import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {shopifyAssets} from 'sanity-plugin-shopify-assets'

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
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
