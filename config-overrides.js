const rewireFrontmatterMarkdown = require("react-app-rewire-frontmatter-markdown");

module.exports = function override(config, env) {
  rewireFrontmatterMarkdown(config, { mode: ["react-component"] }); // <-- THIS
  return config;
};
