import {
  customScrollBar,
  scrollHandle,
  scrollUp,
  scrollDown,
} from "./querySelectors.js";

export const scrollBar = document.addEventListener(
  "DOMContentLoaded",
  function () {
    let autoScrollInterval;
    let mouseY;

    document.addEventListener("wheel", function (event) {
      const delta = Math.sign(event.deltaY);
      const scrollAmount = 50;

      window.scrollBy(0, delta * scrollAmount);
      updateScrollHandle();
    });

    document.addEventListener("touchstart", function (event) {
      //   mouseY = event.touches[0].clientY;
      if (event.target === scrollUp) {
        startAutoScroll(-50);
      } else if (event.target === scrollDown) {
        startAutoScroll(50);
      }
    });
    document.addEventListener("touchend", function (event) {
      if (event.target === scrollUp || event.target === scrollDown) {
        stopAutoScroll();
      }
    });
    document.addEventListener("touchmove", function (event) {
      // event.preventDefault();

      const touchY = event.touches[0].clientY;
      const deltaMouseY = mouseY - touchY;
      mouseY = touchY;

      const scrollSpeed = 5;
      window.scrollBy(0, deltaMouseY * scrollSpeed);
      updateScrollHandle();
    });

    scrollUp.addEventListener("mousedown", function () {
      startAutoScroll(-50);
    });

    scrollDown.addEventListener("mousedown", function () {
      startAutoScroll(50);
    });

    document.addEventListener("mouseup", function () {
      stopAutoScroll();
    });

    function startAutoScroll(amount) {
      autoScrollInterval = setInterval(function () {
        window.scrollBy(0, amount);
        updateScrollHandle();
      }, 50);
    }

    function stopAutoScroll() {
      clearInterval(autoScrollInterval);
    }

    function updateScrollHandle() {
      const scrollPercentage =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      const handleHeight =
        (window.innerHeight / document.body.scrollHeight) * 100;

      const isAtBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight;
      const isAtTop = window.scrollY === 0;

      if (isAtBottom) {
        scrollHandle.style.top = "auto";
        scrollHandle.style.bottom = "0";
      } else if (isAtTop) {
        scrollHandle.style.top = "0";
        scrollHandle.style.bottom = "auto";
      } else {
        scrollHandle.style.top = scrollPercentage + "%";
        scrollHandle.style.bottom = "auto";
      }

      scrollHandle.style.height = handleHeight + "%";
    }

    window.addEventListener("scroll", updateScrollHandle);
    updateScrollHandle(); // Initial update
  }
);
