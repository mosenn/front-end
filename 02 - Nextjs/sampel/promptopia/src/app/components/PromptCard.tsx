"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({
  post,
  handleEdit,
  handleDelete,
  handleTagClick,
}: any) => {
  console.log(post, "post in prompt card");
  // define hooks
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  // state and functions
  const [copy, setCopy] = useState("");
  const handleCopy = () => {
    setCopy(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopy("");
    }, 3000);
  };
  return (
    <main className="prompt_card border border-red-300">
      <section className=" flex justify-between gap-5 items-start">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post?.creator?.image}
            alt="user iamge"
            width={40}
            height={40}
            className="roundedn-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900 ">
              {post?.creator?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post?.creator?.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copy === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt="copy icon"
          />
        </div>
      </section>
      <div>
        <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
        <p
          className="font-inter text-sm blue_gradient cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          {post.tag}
        </p>

        {session?.user?.id === post.creator._id && pathName === "/profile" && (
          <div className="mt-5 border-t border-gray-100 pt-3  gap-4 flex-center">
            <p
              className="font-inter text-[15px] text-lime-900 cursor-pointer "
              onClick={handleEdit}
            >
              edit
            </p>
            <p
              className="font-inter  text-[15px] text-red-900  cursor-pointer "
              onClick={handleDelete}
            >
              delete
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default PromptCard;
