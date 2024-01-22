import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {
  const project = await getProjects();
  console.log("HERE");
  console.log(project);
  return (
  <div>
    {/* Hello */}
    {project.map((project) => (
      <div key={project._id}>{project.name}</div>
    ))}
  </div>
  );
}

