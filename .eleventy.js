module.exports = function(eleventyConfig) {

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
		files: './build/_assets/css/**/*.css'
	});
	
  return {
    dir: {
      input: './src',
      output: './build'
    }
  };
};