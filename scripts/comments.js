/* Load Utterances on individual article pages. */
(() => {
  const container = document.querySelector(".post-body .post-comment");
  if (!container || container.querySelector("script[data-utterances]")) return;

  const heading = document.createElement("h2");
  heading.className = "post-comment-title";
  heading.textContent = "评论区";
  container.prepend(heading);

  const script = document.createElement("script");
  script.src = "https://utteranc.es/client.js";
  script.async = true;
  script.crossOrigin = "anonymous";
  script.dataset.utterances = "true";
  script.setAttribute("repo", "moonf99/moonf99.github.io");
  script.setAttribute("issue-term", "pathname");
  script.setAttribute("theme", "github-light");
  container.appendChild(script);
})();
