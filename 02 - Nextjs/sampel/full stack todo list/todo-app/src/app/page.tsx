import Link from "next/link";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <main>
      <h1>todo app</h1>
      <div className="flex flex-col border">
        <Link href="/pages/about">go to about us</Link>
        <Link href="/pages/create-todo">create todo list</Link>

        {/* show all todo */}
        <Todos/>
      </div>
    </main>
  );
}
