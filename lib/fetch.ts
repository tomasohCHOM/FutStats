export async function getFootballData(endpoint: string) {
  const res = await fetch(`https://api.football-data.org/v4/${endpoint}`, {
    headers: {
      "X-Auth-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
    },
  });
  return res.json();
}
