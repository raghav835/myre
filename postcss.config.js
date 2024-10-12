// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Adding PurgeCSS to remove unused CSS
    '@fullhuman/postcss-purgecss': {
      content: [
        './index.html', // Adjust this to match your actual template files
        './src/**/*.{js,jsx,ts,tsx}', // Adjust for all files where you use your CSS
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  },
};
