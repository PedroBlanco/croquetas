const eleventyPluginFeathericons = require('eleventy-plugin-feathericons');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyPluginFeathericons);
  return {
    dir: {
      include: 'src/_includes',
      input: 'src',
      output: 'dist'
    }
  };
};

