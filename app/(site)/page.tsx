import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from 'next/link'
import AboutMe from "../components/AboutMe";
import { SocialMediaButtons } from "../components/SocialMediaButtons";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      {/* Hi I'm Kerwin */}
      
        <h1 className="text-7xl font-extrabold">
          Hello I&apos;m
          <span
            className="bg-gradient-to-r from-cowboy-orange-dark via-cowboy-orange to-cowboy-skin bg-clip-text
      text-transparent"
          >
            {" "}
            Kerwin!
          </span>
        </h1>
        <p className="mt-3 text-xl text-cowboy-white">
          {" "}
          Hello, My name is Kerwin Mercado and I am a Software Engineer.
        </p>
       {/* My Project section */}
      <h2 className="mt-24 font-bold bg-gradient-to-r from-cowboy-orange to-cowboy-purple-dark text-3xl font-mono">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          // Project item section
          <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-200 rounded-lg p-1 hover:scale-105 hover:border-cowboy-skin transition">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="bg-white object-cover rounded-lg overflow-hidden shadow-md"
              />
            )}
            <div className="mt-2  font-extrabold bg-gradient-to-r from-cowboy-orange-dark via-cowboy-orange to-cowboy-skin bg-clip-text">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
  
      

      <h2 className="mt-24 font-bold bg-gradient-to-r from-cowboy-orange to-cowboy-purple-dark text-3xl font-mono">About Me</h2>
      import SocialMediaButtons from "../components/SocialMediaButtons";

      <div className="container mx-auto px-12">
        <AboutMe />
      </div>
    </div>
  );
}
