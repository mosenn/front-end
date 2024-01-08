"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Form from "../components/Form";
import { useEffect, useState } from "react";

const UpdatePrompt = () => {
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  console.log("promptId", promptId);
  const router = useRouter();
  const [submiting, setSubmiting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      console.log(response, "getPromptDetails data");
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  console.log("update post", post);

  const editPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmiting(true);
    if (!promptId) alert("missing prompt id");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
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
        type="Edit "
        post={post}
        setPost={setPost}
        submiting={submiting}
        handleSubmit={editPrompt}
      />
    </div>
  );
};

export default UpdatePrompt;
