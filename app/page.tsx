import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {
  const project = await getProjects();
  return <div>
    {project.map((project) => (
      <div key={project._id}>
        {project.name}
      </div>
    ))}
  </div>
}

