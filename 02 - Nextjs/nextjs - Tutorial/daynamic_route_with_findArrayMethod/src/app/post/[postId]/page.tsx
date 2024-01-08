import React from "react";

const getPosts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.json();
};

const Post = async ({
  params,
}: {
  params: { postId: string; title: string };
}) => {
  console.log(params);
  const posts = await getPosts();
  console.log(typeof params.postId);
  const findpost = posts.find(
    (p: { id: string }) => p.id.toString() === params.postId
  );
  // console.log(findpost);
  return (
    <div className="h-screen">
      <h1>This post {params.postId}</h1>
      <h1> Title: {findpost.title}</h1>
    </div>
  );
};

export default Post;
