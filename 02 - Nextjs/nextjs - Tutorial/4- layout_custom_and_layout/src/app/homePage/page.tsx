import Image from "next/image";
import Link from "next/link";
import "../globals.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="bg-blue-300 text-7xl p-5 ">this my first nextjs</h1>
        <Link href="/dashboard/navigation">go to dashboard</Link>
      </div>
    </main>
  );
}
