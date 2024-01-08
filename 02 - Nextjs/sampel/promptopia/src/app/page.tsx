import Feed from "./components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      Promptopia
      <h1 className="text-center head_text">Discover & share</h1>
      <span className="text-center orange_gradient">AI-Powred Promts</span>
      <p className="desc text-center">
        Promptopia is an open-source Ai promting tool for modern world to
        discover , create and share creative prompts
      </p>
      {/* Feed */}
      <Feed />
    </section>
  );
}
