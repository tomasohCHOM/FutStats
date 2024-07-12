/**
 * Function to get football data from a specific endpoint
 * @param endpoint the endpoint to obtain the resource from
 * @returns the result of the request
 */
export async function getFootballData(endpoint: string) {
  const res = await fetch(`https://api.football-data.org/v4/${endpoint}`, {
    headers: {
      "X-Auth-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
    },
  });
  return res.json();
}
