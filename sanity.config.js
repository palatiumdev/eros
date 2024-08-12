import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import home from './sanity/home-schema';

const config = defineConfig({
    name: "Eros",
    title: "Sanity Studio",
    projectId: 'uusho6ar',
    dataset: 'production',
    apiVersion: "2024-08-10",
    plugins: [structureTool()],
    basePath: "/admin",
    schema: { types: [home] }
})

export default config;