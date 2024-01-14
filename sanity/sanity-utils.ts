import { structureTool } from "sanity/structure";
import schemas from "./schemas";
import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: "7bwn090d",
        dataset: "production",
        apiVersion: "2023-03-04",
    });

    client.fetch(
        groq`*[_type == "product"]{
            _id,
            _createAt,
            name,
            "slug", slug.current,


        }`
    )
}