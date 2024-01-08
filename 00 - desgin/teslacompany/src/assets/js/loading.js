import { typeWriting } from "./typewriter.js";
import { loadingPage, content, main } from "./querySelectors.js";

export const loading = () => {
  loadingPage.style.display = "block";
  main.style.display = "none";
  setTimeout(() => {
    loadingPage.style.display = "none";
    main.style.display = "block";
  }, 5000);
};
