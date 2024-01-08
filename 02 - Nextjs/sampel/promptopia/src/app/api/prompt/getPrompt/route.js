import { connecetToDb } from "../../../../../utils/database";
import Prompt from "../../../../../models/prompt";

export const GET = async (req) => {
  try {
    await connecetToDb();
    const prompts = await Prompt.find({}).populate("creator");
    console.log('prompts in get' , prompts)
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (err) {
    console.log("get post is err", err);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
