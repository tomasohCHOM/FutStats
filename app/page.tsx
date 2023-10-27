import HighlightCard from "./components/HighlightCard";

export default function Home() {
  const callAPI = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="grid grid-cols-4">
      <HighlightCard />
      <HighlightCard />
      <HighlightCard />
      <HighlightCard />
      <HighlightCard />
      <HighlightCard />
      <HighlightCard />
      <HighlightCard />
    </main>
  );
}
