import React from "react";
import Link from "next/link";
const Form = ({ type, post, setPost, submiting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full felx-start flex-col">
      Form
      <h1 className="head_text tex-left">
        {" "}
        <span className="blue_gradient">{type} post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world and let your imagination
        run wild with any ai-powered platform
      </p>
      <form
        action=""
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="write your prompt here ..."
            className="form_textarea"
          ></textarea>
        </label>

        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">
              {" "}
              [#product , #it , #frontEnd , #backEnd]{" "}
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            className="form_input"
          ></input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link className="text-gray-500 text-sm" href="/">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-orange-500 rounded-full text-white"
            type="submit"
            disabled={submiting}
          >
            {submiting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
