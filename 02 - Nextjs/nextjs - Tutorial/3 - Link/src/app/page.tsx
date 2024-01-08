import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col  justify-center items-center  h-screen">
      <h1 className="m-3 p-4 text-4xl"> we are talk about link in nextjs</h1>
      <h3>go to about use page </h3>
      <Link href="/about">about us page</Link>
      <h3 className="">Read about link in nextjs doc</h3>
      <a href="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating">
        Linking and Navigating
      </a>
      <a href="https://nextjs.org/learn/basics/navigate-between-pages/link-component">
        Navigate Between Pages
      </a>
    </main>
  );
}
