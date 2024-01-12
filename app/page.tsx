import Highlights from "./components/Highlights";

const callAPI = async () => {
  try {
    const res = await fetch("https://api.football-data.org/v4/areas/2077", {
      headers: {
        "X-Auth-Token": process.env.NEXT_PUBLIC_API_TOKEN || "",
      },
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default async function Home() {
  await callAPI();

  return (
    <main className="grid grid-cols-4">
      <Highlights></Highlights>

      <button>CLICK MEEE</button>
    </main>
  );
}
