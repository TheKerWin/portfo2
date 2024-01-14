

import { defineConfig } from 'sanity';
import {structureTool} from 'sanity/structure'
import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "7bwn090d",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2024-01-11",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas }

})

export default config;