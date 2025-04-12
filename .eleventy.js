module.exports = function(eleventyConfig) {
  // Passthrough static assets
  eleventyConfig.addPassthroughCopy("src/contact.css");
  eleventyConfig.addPassthroughCopy("src/home.css");
  eleventyConfig.addPassthroughCopy("src/partners-img");
  eleventyConfig.addPassthroughCopy("src/research");
  eleventyConfig.addPassthroughCopy("src/capacity");
  eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });
  
  eleventyConfig.addPassthroughCopy("src/admin");

  

  return {
    dir: {
      input: "src",     // tells Eleventy to look in src/
      output: "_site"   // your built site will be here
    }
  };
};
