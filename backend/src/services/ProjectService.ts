import { prisma } from "../lib/prisma";

type CreateProject = {
  name: string;
  description?: string;
  ownerId: string;
};

export async function createProject(data: CreateProject) {
  return prisma.project.create({
    data: {
      name: data.name,
      description: data.description,
      ownerId: data.ownerId,
    },
  });
}

export async function getProjects(ownerId: string) {
  return prisma.project.findMany({
    where: {
      ownerId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}