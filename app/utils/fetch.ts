export async function getFootballData() {
  const res = await fetch("https://api.football-data.org/v4/areas/2077", {
    headers: {
      "X-Auth-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
    },
  });
  return res.json();
}
