"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "../components/Form";
import { useState } from "react";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session, "session in create prompt");
  const [submiting, setSubmiting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  console.log("post", post);
  const createPrompt = async (e:React.FormEvent) => {
    e.preventDefault();
    setSubmiting(true);

    try {
      const response = await fetch("/api/prompt/postPrompt", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.id,
          tag: post.tag,
          image: session?.user?.image,
        }),
      });
      console.log(response, " response after create");
      if (response.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err, " create promet is error");
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <div>
      <h1>Create prompt post</h1>

      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submiting={submiting}
        handleSubmit={createPrompt}
      />
    </div>
  );
};

export default CreatePrompt;
