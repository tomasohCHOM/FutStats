import Highlights from "./components/Highlights";
import { getFootballData } from "./utils/fetch";

export default async function Home() {
  const data = await getFootballData();

  return (
    <main className="grid grid-cols-4">
      <Highlights></Highlights>
    </main>
  );
}
