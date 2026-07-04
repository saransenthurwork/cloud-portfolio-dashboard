import { useEffect, useState } from "react";

import { getProjects } from "../../services/projectService";

type Project = {
  id: string;
  name: string;
  description?: string;
};

export default function Overview() {
  const [projects, setProjects] =
    useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const data =
        await getProjects();

      setProjects(data);
    }

    loadProjects();
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-semibold">
        My Projects
      </h1>

      <div className="mt-8 space-y-5">

        {projects.map((project) => (

          <div
            key={project.id}
            className="rounded-2xl border p-6"
          >
            <h2 className="text-xl font-semibold">
              {project.name}
            </h2>

            <p className="mt-2 text-gray-500">
              {project.description}
            </p>
          </div>

        ))}

      </div>

    </div>
  );
}