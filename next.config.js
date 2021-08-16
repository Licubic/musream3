
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['3f6sH9bh7irUpAVZT7zW7z'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  