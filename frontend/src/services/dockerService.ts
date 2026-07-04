const API_URL = "http://localhost:5000/api/docker";

function getToken() {
  return localStorage.getItem("token");
}

export async function getContainers() {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load containers");
  }

  return response.json();
}

export async function createContainer() {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to create container");
  }

  return response.json();
}