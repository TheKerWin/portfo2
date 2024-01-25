import { structureTool } from "sanity/structure";
import schemas from "./schemas";
import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import config from "./config/client-config";
//import groq from 'groq';

export async function getProjects(): Promise<Project[]> {

    return createClient(config).fetch(
        groq`*[_type == "project"]{
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

export async function getProject(slug: string): Promise<Project> {

    return createClient(config).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt, // Corrected field name
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        {slug}
      );
}