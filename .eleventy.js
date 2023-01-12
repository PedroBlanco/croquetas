module.exports = (eleventyConfig) => {
  return {
    dir: {
      include: 'src/_includes',
      input: 'src',
      output: 'dist'
    }
  };
};

