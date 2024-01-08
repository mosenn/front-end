import Link from "next/link";

const getPosts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.json();
};

export default async function Home() {
  const posts = await getPosts();
  // console.log(posts);

  return (
    <main className="h-screen">
      <div>
        {posts
          .map((post: any) => {
            return (
              <div key={post.id}>
                {post.title}
                {post.id}
                <span>
                  {" "}
                  <Link className="text-blue-500" href={`/post/${post.id}`}>
                    read more
                  </Link>
                </span>
              </div>
            );
          })
          .slice(0, 5)}
      </div>
    </main>
  );
}
