export async function getPlots(id) {
  const url = id ? `/api/plots/${id}` : "/api/plots";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch available plots",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  return data.plots;
}
