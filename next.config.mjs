/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:
    process.env.NODE_ENV === "development" ? "" : "/climate-policy-hub-site",
  reactStrictMode: true,
  output: "export",
}

export default nextConfig
