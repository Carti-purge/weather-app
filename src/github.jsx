import React from "react";

const GitHubLink = () => {
  return (
    <div
      className="github-link "
      onClick={() => window.open("https://github.com/Carti-purge", "_blank")}
    >
      Visit My GitHub
    </div>
  );
};

export default GitHubLink;
