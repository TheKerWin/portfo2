import { structureTool } from "sanity/structure";
import schemas from "./schemas";
import { createClient, groq } from "next-sanity";
//import groq from 'groq';

export async function getProjects() {
    const client = createClient({
        projectId: "7bwn090d",
        dataset: "production",
        apiVersion: "2023-03-04",
    });

    return client.fetch(
        groq`*[_type == "product"]{
            _id,
            _createdAt, // Corrected field name
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
      )
      
}