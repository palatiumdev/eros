import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import home from './sanity/home-schema';

const config = defineConfig({
    name: "Eros",
    title: "Sanity Studio",
    projectId: 'uusho6ar',
    dataset: 'production',
    apiVersion: "2024-08-10",
    plugins: [structureTool(), simplerColorInput({
        defaultColorFormat: 'rgba',
        defaultColorList: [
            { label: 'White', value: '#fffffb' },
            { label: 'Black', value: '#000000' },
            { label: 'Yellow', value: '#ffff00' },
            { label: 'Custom...', value: 'custom' },
        ],
        enableSearch: true,
    })],
    basePath: "/admin",
    schema: { types: [home] }
})

export default config;