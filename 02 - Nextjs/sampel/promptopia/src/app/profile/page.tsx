"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "../components/Profile";

const userProfile = () => {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session, "session in user profile");
  console.log(posts, "post state in user profile");

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}/post`);
      const data = await response.json();
      console.log(data, "data");
      setPosts(data);
      console.log(data, "post data in useeffect in user profile ");
    };
    if (session?.user.id) {
      getPosts();
      console.log(posts, "post in if ");
    }
  }, []);
  console.log(posts, "post in user profile after use effect");

  const handleEdit = (post: any) => {
    console.log(post, "post in handle edit");
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post: { _id: number }) => {
    const hasConfrim = confirm("are you sure wanna delete this post ?");
    if (hasConfrim) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const deletePost = posts.filter((p: any) => p._id !== posts._id);
        console.log(deletePost, "delete post");
        setPosts(deletePost);
        router.push('/')
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <Profile
        name="My"
        desc="welcome to your profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default userProfile;
