/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/:path*",
          destination: `https://www-getdbt-com-jekyll.vercel.app/:path*`,
        },
      ],
    };
  },
};
