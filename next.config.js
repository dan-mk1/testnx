/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Nếu bạn deploy lên GitHub Pages dạng username.github.io/ten-repo/
  // thì bỏ comment dòng dưới đây và thay 'ten-repo' bằng tên thực tế:
  // basePath: '/ten-repo',
};

export default nextConfig;