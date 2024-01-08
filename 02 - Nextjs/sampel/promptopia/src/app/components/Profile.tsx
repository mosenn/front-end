import React from "react";
import PromptCard from "./PromptCard";
const Profile = ({ desc, name, data, handleEdit, handleDelete }: any) => {
  console.log(data , 'Profile data')
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post: any) => {
          return (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
              handleTagClick={() => {}}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
