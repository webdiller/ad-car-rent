const withImages = require("next-images");
const nextTranslate = require("next-translate-plugin");
/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  const imagesConfig = withImages(defaultConfig);
  const translateConfig = nextTranslate(defaultConfig);

  // Merge the configurations of both plugins
  const mergedConfig = {
    ...imagesConfig,
    ...translateConfig,
    reactStrictMode: true,
    // Add any additional configurations or overrides here
    // For example, you can customize the Webpack configuration or other Next.js settings.
  };

  return mergedConfig;
};
