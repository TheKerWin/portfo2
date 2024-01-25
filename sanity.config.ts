

import { defineConfig } from 'sanity';
import {structureTool} from 'sanity/structure'
import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas'
import { visionTool } from '@sanity/vision';

const config = defineConfig({
    projectId: "7bwn090d",
    dataset: "production",
    useCdn: false,
    title: "My Personal Website",
    apiVersion: "2024-01-23",
    basePath: "/admin",
    plugins: [structureTool(), visionTool()],
    schema: {types: schemas }

})

export default config;