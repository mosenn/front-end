const sectionsTags = document.querySelectorAll("div[data-section]");
const spans = document.querySelectorAll("span[data-pointer]");
const titleSpans = document.querySelectorAll("div[data-text]");
console.log(titleSpans);
function setActiveSection(entries) {
  entries.forEach((entry) => {
    const section = entry.target;
    if (entry.isIntersecting) {
      // Get the data-type attribute of the section
      const sectionType = section.getAttribute("data-type");
      // aos

      spans.forEach((span) => {
        const spanType = span.getAttribute("data-type");

        if (spanType === sectionType) {
          // Do something with the spans, for example, log the data-type

          span.classList.add("spanactive");
        } else {
          span.classList.remove("spanactive");
        }
      });
      titleSpans.forEach((title) => {
        const attrTitle = title.getAttribute("data-type");
        console.log(attrTitle === sectionType);
        if (attrTitle === sectionType) {
          title.classList.add("titleSpanActive");
        } else {
          title.classList.remove("titleSpanActive");
        }
      });
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(setActiveSection, observerOptions);

sectionsTags.forEach((section) => {
  observer.observe(section);
});
