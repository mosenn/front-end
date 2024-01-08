import { connecetToDb } from "../../../../../utils/database";
import Prompt from "../../../../../models/prompt";

//  GET METHOD HTTP FOR SINGLE PROMPT
export const GET = async (req, { params }) => {
  try {
    await connecetToDb();
    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("cant found propmt", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    console.log("get post is err", err);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

//  PATCH METHOD HTTP FOR UPDATE PROMPT

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connecetToDb();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response("prompt not found", { status: 404 });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (err) {
    console.log(err, "update prompt have a proplem");
  }
};
//  Delete METHOD HTTP FOR Delete PROMPT

export const DELETE = async (req, { params }) => {
  try {
    await connecetToDb();
    const deletePrompt = await Prompt.findByIdAndRemove(params.id);
    return new Response(deletePrompt, { status: 200 });
  } catch (err) {
    return new Response("prompt is not delete", { status: 500 });
  }
};
