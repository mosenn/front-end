import { outerCircle, innerCircle } from "./querySelectors.js";
console.log(outerCircle, outerCircle);
const Cursor = (e) => {
  const outerCircleRect = outerCircle.getBoundingClientRect();
  const posX = e.clientX - outerCircleRect.width / 2;
  const posY = e.clientY - outerCircleRect.height / 2;
  innerCircle.style.left = `${outerCircleRect.width / 2}px`;
  innerCircle.style.top = `${outerCircleRect.height / 2}px`;
  outerCircle.style.left = `${posX}px`;
  outerCircle.style.top = `${posY}px`;
  outerCircle.animate(
    { left: `${posX}px`, top: `${posY}px` },
    { duration: 500, fill: "forwards" }
  );
};
export const costumeCursor = document.addEventListener("mousemove", Cursor);
