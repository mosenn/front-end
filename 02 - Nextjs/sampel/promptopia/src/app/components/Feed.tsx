"use client";
import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data }: any) => {
  console.log(data, " data in prompt card list com");
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post: any) => {
        return (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => {}}
            handleDelete={() => {}}
            handleTagClick={() => {}}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e: React.FormEvent) => {};
  console.log('hellow')
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("/api/prompt/getPrompt");
      const data = await response.json();
      console.log(data, "data");
      setPosts(data);
    };
    getPosts();
  }, []);
  console.log("post state", posts);
  return (
    <section className="feed">
      <form action="" className="relatiave w-full felx-center">
        <input
          type="text"
          placeholder="search for prompts"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={posts}
        handleEdit={() => {}}
        handleDelete={() => {}}
        handleTagClick={() => {}}
      />
    </section>
  );
};

export default Feed;
