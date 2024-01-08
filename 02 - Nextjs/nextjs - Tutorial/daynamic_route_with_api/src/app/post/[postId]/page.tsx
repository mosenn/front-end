import React from "react";

const getPosts = async (id: string) => {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return posts.json();
};

const Post = async ({
  params,
}: {
  params: { postId: string; title: string };
}) => {
  console.log(params);
  const posts = await getPosts(params.postId);

  // console.log(findpost);
  return (
    <div className="h-screen">
      <h1>This post {params.postId}</h1>
      <h1> Title: {posts.title}</h1>
    </div>
  );
};

export default Post;
