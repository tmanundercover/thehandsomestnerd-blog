import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'

export default defineConfig({
    title: "The Handsomest Nerd",
    projectId: "e5l5k4i5",
    dataset: "development",
    plugins: [deskTool()],
    schema: {
        types: schemas,
    },
});