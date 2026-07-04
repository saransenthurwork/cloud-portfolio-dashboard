import { useEffect, useState } from "react";

import {
  getContainers,
  createContainer,
} from "../../services/dockerService";

type Container = {
  id: string;
  name: string;
  image: string;
  status: string;
  ports: string[];
};

export default function Containers() {
  const [containers, setContainers] = useState<Container[]>([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    try {
      const data = await getContainers();
      setContainers(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreate() {
    try {
      setLoading(true);

      await createContainer();

      await load();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-10">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Docker Containers
          </h1>

          <p className="mt-2 text-gray-500">
            Manage Docker Containers
          </p>
        </div>

        <button
          onClick={handleCreate}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Creating..." : "New Container"}
        </button>

      </div>

      <div className="mt-10 grid gap-6">

        {containers.length === 0 && (
          <div className="rounded-2xl border border-dashed p-10 text-center text-gray-500">
            No containers found.
          </div>
        )}

        {containers.map((container) => (

          <div
            key={container.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >

            <div className="flex items-start justify-between">

              <div>

                <h2 className="text-xl font-semibold">
                  {container.name}
                </h2>

                <p className="mt-1 text-gray-500">
                  {container.image}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Ports:{" "}
                  {container.ports.length > 0
                    ? container.ports.join(", ")
                    : "None"}
                </p>

              </div>

              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  container.status === "running"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {container.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}