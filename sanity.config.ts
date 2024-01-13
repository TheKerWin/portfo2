import { defineConfig } from "./node_modules/sanity/lib/exports/index";

import {structureTool } from "sanity/structure";


const config = defineConfig({
    projectId: "7bwn090d",
    
    dataset: "production",

    title: "My Personal Website",

    apiVersion: "2024-01-11",

    basePath: "/admin",

    plugins: [structureTool()]

})

export default config;